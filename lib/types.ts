import { Prisma } from '@prisma/client'
import { JsonValue } from '@prisma/client/runtime/library'
import { Message } from 'ai'

export type ServerActionResult<Result> = Promise<
  | Result
  | {
      error: string
    }
>

export interface User extends Record<string, any> {
  id: string
  email: string
  password: string
  salt: string
}

// export interface Chat extends Record<string, any> {
//   id: string
//   title: string
//   createdAt: Date
//   modelId: string
//   modelTokenizer: string
//   path: string
//   sharePath: string | null
//   userId: string
//   messages: Message[]
//   model: JSON
// }

export interface ChatSettings {
  prompt: string
  temperature: number
  max_tokens: number
}
