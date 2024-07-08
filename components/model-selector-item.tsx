'use client'

import * as React from 'react'
import { useMutationObserver } from '@/lib/hooks/use-mutation-observer'
import { CommandItem } from '@/components/ui/command'
import { getModelIcon } from '@/components/ui/icons'
import { CheckIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'

interface ModelItemProps {
  model: any
  isSelected: boolean
  onSelect: () => void
  onPeek: (model: any) => void
}

// TODO performance
export const ModelItem = React.memo(
  ({ model, isSelected, onSelect, onPeek }: ModelItemProps) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const icon = React.useMemo(
      () => getModelIcon(model.architecture.tokenizer, 15, 15),
      [model]
    )

    useMutationObserver(ref, mutations => {
      for (const mutation of mutations) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'aria-selected'
        ) {
          onPeek(model)
        }
      }
    })

    return (
      <CommandItem
        key={model.id}
        onSelect={onSelect}
        ref={ref}
        className={cn(
          isSelected ? 'border-stem-green-400' : 'border-transparent',
          'text-xs border truncate capitalize px-4 aria-selected:bg-zinc-800'
        )}
      >
        <span className="mr-2">{icon} </span>
        <span className="truncate w-[150px] @sm:w-[150px] text-xs">
          {model.id}
        </span>
        <ModelSelectorToolTip
          children={
            <CircleHelp
              size={16}
              className="absolute right-1"
              strokeWidth={0.9}
            />
          }
          model={model}
        />
      </CommandItem>
    )
  }
)

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { CircleHelp } from 'lucide-react'

interface ModelTooltipProps {
  children: React.ReactNode
  model: any
}

export function ModelSelectorToolTip({ children, model }: ModelTooltipProps) {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger className="flex items-center justify-center ">
          {children}{' '}
        </TooltipTrigger>
        <TooltipContent className="bg-black/90 ">
          <div className="flex justify-start flex-col gap-2 text-white p-1     text-xs  items-start">
            <p>{model.name}</p>
            <div className="flex flex-wrap">
              <div className="flex flex-col   p-1">
                Context
                <div className="border-b border-stem-green-500/50" />
                <span className="m-1">{model.context_length}</span>
              </div>{' '}
              <div className="flex flex-col   p-1">
                Input
                <div className="border-b border-stem-green-500/50" />
                <span className="ml-1 mt-1">
                  {(parseFloat(model.pricing.prompt) * 100000).toFixed(2)}{' '}
                  $
                </span>
              </div>{' '}
              <div className="flex flex-col   p-1">
                Output
                <div className="border-b border-stem-green-500/50" />
                <span className="ml-1 mt-1">
                  {(parseFloat(model.pricing.completion) * 100000).toFixed(
                    2
                  )}{' '}
                  $
                </span>
              </div>{' '}
              <div className="flex flex-col   p-1">
                Image
                <div className="border-b border-stem-green-500/50" />
                <span className="ml-1  mt-1">
                  {model.pricing.image !== '0'
                    ? (parseFloat(model.pricing.image) * 100000).toFixed(
                        2
                      ) + '$'
                    : '-'}
                </span>
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
