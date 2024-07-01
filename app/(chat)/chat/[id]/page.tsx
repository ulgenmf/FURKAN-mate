import { redirect } from 'next/navigation'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { getChat, getModelsList } from '@/app/actions'

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

export default async function ChatPage({ params }: ChatPageProps) {
  const chat = await getChat(params.id)
  const models = await getModelsList()

  if (!chat) {
    redirect('/')
  }

  return (
    <AI
      initialAIState={{
        chatId: chat.id,
        messages: chat.messages,
        model: chat.model
      }}
    >
      <Chat id={chat.id} models={models} />
    </AI>
  )
}
