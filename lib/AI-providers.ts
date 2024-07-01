import { createOpenAI } from '@ai-sdk/openai'
import OpenAI from 'openai'
// *************************************************** OPEN AI ***************************************************

export const openRouterModel_CUSTOM = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY
})
const openAiProvider = createOpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
})
export const OpenAIModel_VERCEL = openAiProvider('gpt-3.5-turbo')

// *************************************************** OPEN ROUTER ***************************************************
const openRouterProvider = createOpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1'
})

export function OpenRouterModel_VERCEL(model: string) {
  return openRouterProvider(model)
}
