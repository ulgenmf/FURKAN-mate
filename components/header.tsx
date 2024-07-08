'use client'

import * as React from 'react'

import { Button, buttonVariants } from '@/components/ui/button'
import { IconSettings, IconDownload } from '@/components/ui/icons'
import { SidebarMobile } from './sidebar-mobile'
import { SidebarToggle } from './sidebar-toggle'
import { ChatHistory } from './chat-history'
import { ModelSelector } from './model-selector'
import { ModelConfig } from './model-config'

import { PromptLibrary } from './prompt-library'
import ModelInfo from './new-components/model-info'
import { User } from 'next-auth'
import { ModelSettings } from './model-settings'

interface HeaderProps {
  usersModels: any
  allModels: any
}

export function Header({ usersModels, allModels }: HeaderProps) {
  return (
    <header className="sticky top-1 z-50 flex items-center justify-between w-full md:w-2/3 rounded-2xl m-auto  h-16 px-3 border-b shrink-0 bg-noble-black-900 ">
      <div className="flex items-center">
        <SidebarMobile side="left">
          <ChatHistory />
        </SidebarMobile>
        <SidebarToggle side="left" />

        <div className="flex flex-row items-center  space-x-2 ml-2">
          <ModelSelector usersModels={usersModels} />
          <ModelConfig allModels={allModels} userModels={usersModels} />
          <ModelSettings />
        </div>
      </div>

      {/* space-x-2 */}
      <div className="flex items-center">
        {/*<button onClick={() => syncModels()}> sync</button>*/}
        {/* <Button variant="ghost" size="icon"> */}

        {/* </Button> */}

        <SidebarMobile side="right">
          <PromptLibrary />
        </SidebarMobile>
        <SidebarToggle side="right" />
      </div>
    </header>
  )
}
