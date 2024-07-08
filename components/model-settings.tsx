'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Label } from '@/components/ui/label'
import { useMediaQuery } from 'usehooks-ts'
import { getModelIcon, IconSettings } from './ui/icons'
import { Textarea } from '@/components/ui/textarea'
import { Slider } from '@/components/ui/slider'
import { useAIState, useUIState } from 'ai/rsc'
import { useEffect, useState } from 'react'
import { SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'
import { AI } from '@/lib/chat/actions'
import { usePathname, useRouter } from 'next/navigation'

export function ModelSettings() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [aiState, setAIState] = useAIState()
  const [open, setOpen] = React.useState(false)

  const [selectedModel, setSelectedModel] = React.useState<any>(aiState.model)
  useEffect(() => {
    setSelectedModel(aiState.model)

    return () => {}
  }, [aiState])

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <IconSettings className="cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Model Settings</DialogTitle>
            <DialogDescription className="text-center">
              Adjust the settings for your Model here. Click save when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <AIModelSettingsForm
            isOpen={open}
            setOpen={setOpen}
            model={selectedModel}
          />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <IconSettings className="cursor-pointer" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-center">
          <DrawerTitle>Model Settings</DrawerTitle>
          <DrawerDescription>
            Adjust the settings for your Model here. Click save when you're
            done.
          </DrawerDescription>
        </DrawerHeader>
        <AIModelSettingsForm
          isOpen={open}
          setOpen={setOpen}
          model={selectedModel}
        />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

interface AIModelSettingsFormProps extends React.ComponentProps<'form'> {
  className?: string
  model: any
  isOpen: boolean // Add this line
  setOpen: (isOpen: boolean) => void
}

export function AIModelSettingsForm({
  className,
  model,
  setOpen,
  isOpen
}: AIModelSettingsFormProps) {
  const [ai, setAi] = useAIState<typeof AI>()
  const [maxTokens, setMaxTokens] = useState(ai.settings.max_tokens)
  const [input, setInput] = useState(ai.settings.prompt)
  const [temperature, setTemperature] = useState(ai.settings.temperature)
  const icon = getModelIcon(model.architecture.tokenizer, 20, 20)
  const [ui, setUi] = useUIState<typeof AI>()
  const router = useRouter()
  const path = usePathname()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Attempt to update the AI settings
      await setAi({
        ...ai,
        settings: {
          ...ai.settings,
          max_tokens: maxTokens,
          prompt: input,
          temperature: temperature
        }
      })
      // If successful, push the router to include the error query parameter
      router.push(`${path}?error=Settings saved successfully`)
    } catch (error) {
      // Log the error or handle it as needed
      console.error(error)
      // Push the router to include the error query parameter even if an error occurs
      router.push(`${path}?error=${error}`)
    }
    setOpen(!isOpen)
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={cn('grid items-start  gap-4', className)}
      >
        <div className="flex gap-2 items-center justify-center">
          {icon}
          {model.name}
          {icon}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="systemPrompt">System Prompt</Label>
          <Textarea
            maxLength={300}
            id="systemPrompt"
            className="max-h-20 resize-none"
            onChange={e => setInput(e.target.value)}
            placeholder={ai.settings.prompt}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="maxTokens">Max Tokens: {maxTokens}</Label>
          <Slider
            id="maxTokens"
            value={[maxTokens]}
            onValueChange={value => setMaxTokens(value[0])}
            max={4096}
            step={1}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="temperature">
            Temperature: {temperature.toFixed(1)}
          </Label>
          <Slider
            id="temperature"
            value={[temperature]}
            onValueChange={value => setTemperature(value[0])}
            max={2}
            step={0.1}
          />
        </div>
        <div className="flex gap-4">
          More about the model
          <Link
            href={`https://openrouter.ai/models/${model.id}`}
            passHref
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer">
              <SquareArrowOutUpRight
                height={20}
                width={20}
                className="text-noble-black-300 duration-200 hover:text-lime-400"
              />
            </a>
          </Link>
        </div>
        <Button type="submit">Save changes</Button>
      </form>
    </div>
  )
}
