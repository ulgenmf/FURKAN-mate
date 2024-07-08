import { SidebarDesktop } from '@/components/sidebar-desktop'

import { PromptLibrary } from '@/components/prompt-library'
import { ChatHistory } from '@/components/chat-history'
import { serverClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { ErrorToast } from '@/components/ui/err'

interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  //const supa = await serverClient()
  //const {
  //  data: { user }
  //} = await supa.auth.getUser()

  //if (!user) {
  //  return redirect('/log-in')
  //}

  return (
    // h-[calc(100vh_-_theme(spacing.16))]
    <div className="relative flex w-screen h-screen overflow-hidden">
      <SidebarDesktop side="left">
        <ChatHistory />
      </SidebarDesktop>
      <ErrorToast />
      {children}
      <SidebarDesktop side="right">
        <PromptLibrary />
      </SidebarDesktop>
    </div>
  )
}
