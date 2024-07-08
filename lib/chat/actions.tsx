import 'server-only'

import {
  createAI,
  getMutableAIState,
  getAIState,
  createStreamableValue,
  streamUI
} from 'ai/rsc'
import OpenAI from 'openai'
import { BotMessage } from '@/components/stocks'

// TODO: Remove Stock UI only text for now

import { nanoid } from '@/lib/utils'
import { SpinnerMessage, UserMessage } from '@/components/stocks/message'
import prismaC from '../prisma-client'
import { OpenRouterModel_VERCEL } from '../AI-providers'
import { Chat } from '@prisma/client'
import { CoreMessage } from 'ai'
// import { auth } from '@/auth'
const openai = new OpenAI({
  // apiKey: process.env.OPENAI_API_KEY || ''

  apiKey: 'ollama', // required but unused
  baseURL: 'http://localhost:11434/v1'
})

async function submitUserMessage(content: string) {
  'use server'
  const aiState = getMutableAIState<typeof AI>()

  aiState.update({
    ...aiState.get(),
    messages: [
      ...aiState.get().messages,
      {
        id: nanoid(),
        role: 'user',
        content
      }
    ]
  })

  let textStream: undefined | ReturnType<typeof createStreamableValue<string>>
  let textNode: undefined | React.ReactNode
  const selectedModel = aiState.get().model.id
  const modelSettings = aiState.get().settings
  const result = await streamUI({
    model: OpenRouterModel_VERCEL(selectedModel),
    initial: <SpinnerMessage />,
    system: modelSettings.prompt,
    maxTokens: modelSettings.max_tokens,
    temperature: modelSettings.temperature,
    messages: [
      ...aiState.get().messages.map((message: any) => ({
        role: message.role,
        content: message.content,
        name: message.name
      }))
    ],
    text: ({ content, done, delta }) => {
      if (!textStream) {
        textStream = createStreamableValue('')
        textNode = <BotMessage content={textStream.value} />
      }

      if (done) {
        textStream.done()
        aiState.done({
          ...aiState.get(),
          messages: [
            ...aiState.get().messages,
            {
              id: nanoid(),
              role: 'assistant',
              content
            }
          ]
        })
      } else {
        textStream.update(delta)
      }

      return textNode
    },
    tools: {}
  })
  return {
    id: nanoid(),
    display: result.value
  }
}

export type Message = CoreMessage & {
  id: string
}
export type AIState = {
  chatId: string
  model: any
  messages: any
  settings: {
    prompt: string
    temperature: number
    max_tokens: number
  }
}

export type UIState = {
  id: string
  display: React.ReactNode
}[]

export const AI = createAI<AIState, UIState>({
  actions: {
    submitUserMessage
  },
  initialUIState: [],
  initialAIState: {
    chatId: nanoid(),
    messages: [],
    model: {},
    settings: {
      prompt: 'You are helpfull assistant',
      temperature: 0.5,
      max_tokens: 100
    }
  },

  onGetUIState: async () => {
    'use server'

    const aiState = getAIState() as Chat
    if (aiState) {
      const uiState = getUIStateFromAIState(aiState)
      return uiState
    }
  },

  onSetAIState: async ({ state, done }) => {
    'use server'
    const { chatId, messages, model, settings } = state

    const createdAt = new Date()
    const path = `/chat/${chatId}`
    const firstMessageContent = messages[0].content as string
    const title = firstMessageContent.substring(0, 100)

    const chat: Chat = {
      id: chatId,
      title,
      path,
      settings,
      model,
      modelId: model.id,
      messages,
      createdAt,
      sharePath: null
    }
    await prismaC.chat.upsert({
      where: {
        id: chatId // Assuming `chatId` uniquely identifies a chat
      },
      update: {
        title,
        path,
        settings,
        model,
        messages,
        createdAt: createdAt,
        sharePath: null
      },
      create: {
        id: chatId,
        title,
        path,
        settings,
        model,
        messages,
        createdAt: createdAt,
        sharePath: null,
        modelId: model.id
      }
    })
  }
})

export const getUIStateFromAIState = async (aiState: Chat) => {
  return (
    aiState
      // @ts-ignore
      .messages!.filter(
        (message: { role?: string }) => message && message.role !== 'system'
      ) // @ts-ignore
      .map((message, index) => ({
        id: `${aiState.id}-${index}`,
        display:
          message.role === 'user' ? (
            <UserMessage>{message.content as string}</UserMessage>
          ) : (
            <BotMessage content={message.content} />
          )
      }))
  )
}
