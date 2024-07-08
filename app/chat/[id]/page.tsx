import { redirect } from 'next/navigation'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { getChat } from '@/app/actions'
import { useAIState, useUIState } from 'ai/rsc'
import prismaC from '@/lib/prisma-client'
import { prompts } from '../../../database/prompts'

export interface ChatPageProps {
  params: {
    id: string
  }
}

// export async function generateMetadata({
//   params
// }: ChatPageProps): Promise<Metadata> {
//   const chat = await getChat(params.id)
//   return {
//     title: chat?.title.toString().slice(0, 50) ?? 'Chat'
//   }
// }

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
export default async function ChatPage({ params }: ChatPageProps) {
  const chat = await getChat(params.id)

  if (chat === null) {
    // Handle the case when chat is null
    return <div>Chat not found</div>
  }

  const { filteredData: userModels } = await getAllModels()
  const { normalData: allModels } = await getAllModels()
  return (
    <AI
      initialAIState={{
        chatId: chat.id,
        messages: chat.messages,
        model: chat.model,
        settings: {
          prompt: 'You are a helpful assistant',
          temperature: 0.5,
          max_tokens: 100
        }
      }}
    >
      <Chat id={chat.id} allModels={allModels} usersModels={userModels} />
    </AI>
  )
}
