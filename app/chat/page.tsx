import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { OnBoardingScreen } from '@/components/onboarding-screen'
import { createClient } from '@/lib/supabase/client'
import { redirect } from 'next/navigation'
import { cache } from 'react'
import { unstable_cache } from 'next/cache'
import { ChatSettings } from '@/lib/types'

interface IndexPageProps {
  searchParams: {
    model: string
  }
}
const getAllModels = async () => {
  const revalidatedData = await fetch(`https://openrouter.ai/api/v1/models`, {
    next: { revalidate: 10 }
  })

  const data = await revalidatedData.json()
  //console.error('called')
  // Parsing JSON response

  const normalData = data.data.slice(2)
  // @ts-ignore
  const filteredData = data.data.filter(item => item.id.includes(':free'))

  return { normalData, filteredData }
}
// get the models from the main api (openrouter)

export default async function IndexPage({ searchParams }: IndexPageProps) {
  const id = nanoid()
  const { filteredData: userModels } = await getAllModels()
  const { normalData: allModels } = await getAllModels()
  // const allModels = await getAllModels()

  return (
    <AI
      initialAIState={{
        chatId: id,
        messages: [],
        model: userModels[0],
        settings: {
          prompt: 'You are helpful assistant',
          temperature: 0.5,
          max_tokens: 100
        }
      }}
    >
      <Chat id={id} allModels={allModels} usersModels={userModels} />
    </AI>
  )
}
