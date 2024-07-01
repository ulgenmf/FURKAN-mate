import { openai } from '@ai-sdk/openai'
import { generateText, streamText, tool } from 'ai'
import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

async function main() {
  const location = 'London'
  const result = await generateText({
    model: openai('gpt-4o'),
    prompt: `You are a funny chatbot. users location: ${location}`,
    tools: {
      weather: {
        description: "Get the weather for the user's location",
        parameters: z.object({
          location: z.string().describe("user's location")
        }),
        execute: async ({ location }) => {
          const temperature = Math.floor(Math.random() * 31) // call external api for {location}
          return { temperature }
        }
      }
    }
  })

  if (result.toolResults && result.toolCalls) {
    const joke = await streamText({
      model: openai('gpt-4o'),
      prompt: `Tell me a joke that incorporates ${location}
               and it's current temperature (${result.toolResults[0].result.temperature})`
    })

    for await (const textPart of joke.textStream) {
      process.stdout.write(textPart)
    }
  }
}

main().catch(console.error)

export const weatherTool = tool({
  description: 'Get the weather in a location',

  parameters: z.object({
    location: z.string().describe('The location to get the weather for')
  }),
  // location below is inferred to be a string:
  execute: async ({ location }) => ({
    location,
    temperature: 72 + Math.floor(Math.random() * 21) - 10
  })
})
