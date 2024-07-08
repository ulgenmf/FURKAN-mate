'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { Chat } from '@prisma/client'
import axios from 'axios'
import prismaC from '@/lib/prisma-client'
import { cache } from 'react'
import { serverClient } from '@/lib/supabase/server'
import { customModelTemp } from '@/database/custom-model'
import { supaGetAuth } from '@/lib/db-utils'

export async function getChats(): Promise<Chat[]> {
  const chats = await prismaC.chat.findMany({})
  return chats
}

export async function getUserAuth() {
  const supa = await serverClient()
  const {
    data: { user }
  } = await supa.auth.getUser()

  return user
}

export async function logOut() {
  const supabase = await serverClient()

  const { error } = await supabase.auth.signOut()
}
// export async function getUserData() {
//   const user = await getUserAuth()
//   const userD = await prismaC.user.findFirst({ where: { id: user!.id } })
//   return userD
// }

// export async function clearchats(id: string) {
//   const user = await getUserAuth()
//   await prismaC.chat.deleteMany({
//     where: {
//       userId: user!.id
//     }
//   })
//   revalidatePath('/', 'layout')
// }

// Function to get a single chat by ID
export async function getChat(chatId: string): Promise<Chat | null> {
  return await prismaC.chat.findUnique({
    where: { id: chatId }
  })
}

// Function to remove a chat by ID
export async function removeChat({ id, path }: { id: string; path: string }) {
  await prismaC.chat.delete({
    where: { id: id }
  })

  revalidatePath('/', 'page')
  return revalidatePath(path)
}

// Function to clear all chats
export async function clearChats(): Promise<void> {
  await prismaC.chat.deleteMany({})
}

const OLLAMA_URL = 'http://localhost:11434'

export async function isOllamaAvailable() {
  try {
    const data = await fetch(OLLAMA_URL)
    return data.ok
  } catch (error) {
    console.error('Error checking OLLAMA:', error)
    return false
  }
}

// create a sync function to sync installed models with supported models by getting installed models and then updating the supported models installed field to true.

// export async function fetchAndStoreModels() {
//   console.log(
//     '\x1b[32m ################################################# \x1b[0m'
//   )
//   console.log(
//     '\x1b[33m ################################################# \x1b[0m'
//   )
//   console.log()
//   console.log('main api called')
//   try {
//     let response = await fetch('https://openrouter.ai/api/v1/models', {
//       method: 'GET'
//     })

//     let data = await response.json()

//     for (const model of data.data) {
//       if (model && model.id) {
//         await prismaC.aIModelPool.upsert({
//           where: { id: model.id },
//           update: { data: model },
//           create: { id: model.id, data: model, isSaved: false }
//         })
//       } else {
//       }
//     }

//     console.error('Models updated successfully')
//   } catch (error) {
//     console.error('Error fetching or storing models:', error)
//   }
// }

// export const getModelsList = async () => {
//   console.log('getmodelst called')
//   const models = await prismaC.aIModelPool.findMany()
//   if (models.length == 0) {
//     console.log('models are being again 1000')
//     await fetchAndStoreModels()
//   }
//   return models
// }

// export async function getUserTokenizer(modelId: string) {
//   const tokenizer = await prismaC.userModel.findFirst({
//     where: {
//       userId: modelId
//     }
//   })
//   return tokenizer
// }
// // export async function getUserModels() {

//   const model = await prismaC.userModel.findMany({})
//   if (model.length == 0) {
//     await prismaC.userModel.create({
//       data: { data: customModelTemp, id: customModelTemp.id, userId: user!.id }
//     })
//   }
//   return model
// }
// export async function createUserModel({ model }: { model: any }) {
//   try {
//     const newModel = await prismaC.userModel.create({
//       data: {
//         userId: user!.id,
//         id: model.id,
//         data: model
//       }
//     })
//     return newModel
//   } catch (error) {
//     console.error('Failed to create user model:', error)
//     throw new Error(
//       `Error creating user model for ${user}: ${error instanceof Error ? error.message : String(error)}`
//     )
//   }
// }

// TODO  create error handling, logging

//  ********************** OLLAMA **********************

// const OLLAMA_URL = 'http://localhost:11434'

// export async function isOllamaAvailable() {
//   try {
//     const data = await fetch(OLLAMA_URL)
//     return data.ok
//   } catch (error) {
//     console.error('Error checking OLLAMA:', error)
//     return false
//   }
// }
// // create a sync function to sync installed models with supported models by getting installed models and then updating the supported models installed field to true.

// export async function getOllamaModels() {
//   const res = await fetch('http://localhost:11434/api/tags', {
//     cache: 'no-store'
//   })
//   const data = await res.json()

//   console.log('data', data)

//   return data
// }

// export async function getModelsList() {
//   const models = await readDatabaseModels()
//   return models
// }

// // TODO: Handle unsupported models
// export async function syncModels(ollama_models: any) {
//   let models = await getModelsList()
//   // @ts-ignore
//   const installedModelNames = ollama_models.models.map(model => model.name)

//   for (let modelName in models) {
//     if (installedModelNames.includes(modelName)) {
//       models[modelName].installed = true
//     }
//   }

//   await writeDatabaseModels(models)
//   return 'Models synced successfully'
// }

// // get installed models
// export async function getInstalled() {
//   const models = await readDatabaseModels()
//   // filter out models with installed field set to true
//   const installed = Object.values(models).filter(model => model.installed)
//   return installed
// }

// // get uninstalled models
// export async function getUninstalled() {
//   const models = await readDatabaseModels()
//   // filter out models with installed field set to false
//   const uninstalled = Object.values(models).filter(model => !model.installed)
//   return uninstalled
// }
