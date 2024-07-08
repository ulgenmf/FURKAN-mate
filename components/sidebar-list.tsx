import { clearChats, getChats } from '@/app/actions'
import { ClearHistory } from '@/components/clear-history'
import { SidebarItems } from '@/components/sidebar-items'
import { ThemeToggle } from '@/components/theme-toggle'
import { cache } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'

interface SidebarListProps {
  children?: React.ReactNode
}

const loadChats = cache(async () => {
  const chats = await getChats()
  return chats?.reverse()
})

export async function SidebarList({}: SidebarListProps) {
  const chats = await loadChats()

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <h4 className="text-sm font-medium">Chat History</h4>
      </div>
      <div className="flex-1 overflow-auto">
        {chats?.length ? (
          <div className="space-y-1 px-3">
            <SidebarItems chats={chats} />
          </div>
        ) : (
          <div className="p-8 text-center">
            <p className="text-sm text-muted-foreground">No chat history</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between p-4">
        <ThemeToggle />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="cursor-not-allowed" variant="outline">
                <Trash2 className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className='p-2 text-base'>You can not delete messages</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* <ClearHistory isEnabled={chats?.length > 0} /> */}
      </div>
    </div>
  )
}
