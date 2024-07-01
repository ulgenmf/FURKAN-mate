import { Prisma } from '@prisma/client'
import { JsonValue } from '@prisma/client/runtime/library'
import { Message } from 'ai'



export interface Model {
  id: number
  name: string
  type: string
  installed: boolean
  created_by: string
  context_length: number
  description: string
  label: string
  memory: string
  storage: string
  config: Record<string, any>
  max_config: Record<string, any>
  min_config: Record<string, any>
}

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

export interface Models {
  id: string
  data: JsonValue
}
