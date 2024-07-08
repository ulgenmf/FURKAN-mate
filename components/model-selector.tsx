import * as React from 'react'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { ModelItem } from './model-selector-item'
import { useAIState } from 'ai/rsc'
import { getModelIcon } from '@/components/ui/icons'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList
} from '@/components/ui/command'

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

interface ModelSelectorProps {
  usersModels: any[]
}

export function ModelSelector({ usersModels }: ModelSelectorProps) {
  // url and check if include something after chat then don't allow to change model
  const pathname = usePathname()
  const router = useRouter()
  // const router = useRouter()
  const [aiState, setAIState] = useAIState()

  const [open, setOpen] = React.useState(false)
  const [peekedModel, setPeekedModel] = React.useState<any>(usersModels[0].id)

  const [selectedModel, setSelectedModel] = React.useState<any>(
    aiState.model ?? usersModels[0].id
  )
  const icon = getModelIcon(selectedModel.architecture.tokenizer)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          role="combobox"
          aria-expanded={open}
          aria-label="Select a model"
          className="items-center w-1/3 md:min-w-max  flex border p-2 rounded-xl  overflow-hidden  justify-between"
        >
          <span className="mr-2">{icon}</span>
          <span className="truncate text-clip text-xs">
            {selectedModel.name}
          </span>

          <CaretSortIcon className="ml-2 size-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>

      <PopoverContent align="start" className="w-56 p-0">
        <Command loop>
          <CommandInput placeholder="Search Models..." />
          <CommandList className="h-fit max-h-[300px] overflow-y-auto overflow-x-hidden md:max-h-[450px] z-50">
            <CommandEmpty>No Models found.</CommandEmpty>
            <CommandGroup heading="">
              {usersModels.map(model => (
                <ModelItem
                  key={model.id}
                  // @ts-ignore
                  model={model}
                  isSelected={selectedModel?.id === model.id}
                  onPeek={model => setPeekedModel(model)}
                  onSelect={() => {
                    if (pathname.includes('/chat/')) {
                      router.push(`/?model=${model.id}`)
                    } else {
                      setSelectedModel(model)
                      setAIState({ ...aiState, model: model })
                      setOpen(false)
                    }
                  }}
                />
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
