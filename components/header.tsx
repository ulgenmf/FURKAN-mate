'use client'

import * as React from 'react'

import { Button, buttonVariants } from '@/components/ui/button'
import { IconSettings, IconDownload } from '@/components/ui/icons'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'
import { ChatHistory } from './chat-history'
import { ModelSelector } from './model-selector'
import { ModelConfig } from './model-config'
import { Models } from '@/lib/types'

import { PromptLibrary } from './prompt-library'
import SidebarWrapper from './side-bar/side-bar-wrapper'

interface HeaderProps {
  usersModels: Models[]
  allModels: Models[]
}

export function Header({ usersModels, allModels }: HeaderProps) {
  console.log(usersModels)
  return (
    <header className="sticky top-2 z-50 flex items-center justify-between    h-16 w-2/3  border-b  px-3 m-auto   rounded-2xl bg-secondary ">
      <div className="flex items-center">
        <SidebarMobile side="left">
          <SidebarWrapper />
        </SidebarMobile>
        <SidebarToggle side="left" />

        <div className="flex flex-row space-x-2 ml-2">
          <ModelSelector usersModels={allModels} />
          <ModelConfig allModels={allModels} />
        </div>
      </div>

      {/* space-x-2 */}
      <div className="flex items-center">
        <Button variant="ghost" size="icon">
          <IconSettings />
        </Button>

        <SidebarMobile side="right">
          <PromptLibrary />
        </SidebarMobile>
        <SidebarToggle side="right" />
      </div>
    </header>
  )
}
