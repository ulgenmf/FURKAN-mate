// GLOBAL: Auth: userId: "123"

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { Chat } from '@prisma/client'
import axios from 'axios'
import prismaC from '@/lib/prisma-client'
import { cache } from 'react'
import { serverClient } from '@/lib/supabase/server'

export async function getChats(): Promise<Chat[]> {
  const {
    data: { user }
  } = await serverClient().auth.getUser()

  const chats = await prismaC.chat.findMany({
    where: { userId: user?.id }
  }) // Use optional
  return chats
}

// Function to get a single chat by ID
export async function getChat(chatId: string): Promise<Chat | null> {
  return await prismaC.chat.findUnique({
    where: { id: chatId }
  })
}

// Function to remove a chat by ID
export async function removeChat(chatId: string): Promise<void> {
  await prismaC.chat.delete({
    where: { id: chatId }
  })
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
export async function saveChat(newChat: Chat): Promise<Chat> {
  return await prismaC.chat.create({
    data: newChat
  })
}

// create a sync function to sync installed models with supported models by getting installed models and then updating the supported models installed field to true.

export async function fetchAndStoreModels() {
  try {
    let response = await fetch('https://openrouter.ai/api/v1/models', {
      method: 'GET'
    })

    let data = await response.json()

    for (const model of data.data) {
      if (model && model.id) {
        await prismaC.aIModelPool.upsert({
          where: { id: model.id },
          update: { data: model },
          create: { id: model.id, data: model }
        })
      } else {
        console.log('Invalid model data:', model)
      }
    }

    console.log('Models updated successfully')
  } catch (error) {
    console.error('Error fetching or storing models:', error)
  }
}

export const getModelsList = async () => {
  const models = await prismaC.aIModelPool.findMany()
  return models
}

export const createUserModel = async (userId: string) => {}

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
