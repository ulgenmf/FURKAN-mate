import { SidebarDesktop } from '@/components/sidebar-desktop'

import { PromptLibrary } from '@/components/prompt-library'
import { ChatHistory } from '@/components/chat-history'
import SidebarWrapper from '@/components/side-bar/side-bar-wrapper'
import { serverClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  const {
    data: { user }
  } = await serverClient().auth.getUser()

  if (!user) {
    return redirect('/log-in')
  }
  return (
    // h-[calc(100vh_-_theme(spacing.16))]
    <div className="relative flex w-screen h-screen overflow-hidden">
      <SidebarDesktop side="left">
        <SidebarWrapper />
      </SidebarDesktop>
      {children}
      <SidebarDesktop side="right">
        <PromptLibrary />
      </SidebarDesktop>
    </div>
  )
}
