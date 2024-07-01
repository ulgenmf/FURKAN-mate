import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'

import { Models } from '@/lib/types'
import { OnBoardingScreen } from '@/components/onboarding-screen'
import { Header } from '@/components/header'
import { createClient } from '@/lib/supabase/client'
import { redirect } from 'next/navigation'
import { fetchAndStoreModels, getModelsList } from '../actions'

interface IndexPageProps {
  searchParams: {
    model: string
  }
}

// cache(async () => {
//   const models = await prismaC.aIModelPool.findMany()
//   return models
// })

export default async function IndexPage({ searchParams }: IndexPageProps) {
  const id = nanoid()
  const models = await getModelsList()


  return (
    <AI initialAIState={{ chatId: id, messages: [], model: '01-ai/yi' }}>
      <Chat id={id} allModels={models} usersModels={models} />
    </AI>
  )
}
