'use client'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { getModelIcon } from '@/components/ui/icons'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from '@radix-ui/react-tooltip'
import {
  ChevronsUpDown,
  ChevronsDownUp,
  CircleMinus,
  CirclePlus
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Prisma } from '@prisma/client'

export function ModelConfig({ fetchedModels }: { fetchedModels: any[] }) {
  return (
    <>
      <Dialog defaultOpen>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <MixerHorizontalIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="h-2/3 overflow-auto ">
          <DialogHeader>
            <DialogTitle className="text-center">
              Avaible Models List
            </DialogTitle>
            <DialogDescription className="text-center ">
              <ModalList models={fetchedModels} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export function ModalList({ models }: { models: any[] }) {
  function onModelClick(a: any) {
    return
  }
  return (
    <div className="flex gap-4 py-3 items-stretch w-full justify-center flex-col overflow-auto ">
      {models.map(mdl => (
        <Collapsible
          key={mdl.id}
          className=" flex flex-col font-GeistSans text-white border border-noble-black-800 hover:border-stem-green-500 duration-200 border-collapse rounded-lg p-2 justify "
        >
          <div className="flex items-start justify-start">
            <SaveModel onClick={() => onModelClick(mdl)} />
            <CollapsibleTrigger className="flex w-full text-center relative items-start justify-between ">
              <div />
              <div className="flex gap-2 items-center justify-center   p-2  pl-1">
                <>{getModelIcon(`${mdl.data.architecture.tokenizer}`)}</>
                <p>{mdl.data.name}</p>
              </div>
              <div className=" active:scale-110 active:duration-200 transition-transform bg-transparent hover:bg-transparent p-2 text-white rounded-lg border hover:border-stem-green-400">
                <ChevronsUpDown height={15} width={15} strokeWidth={2} />
              </div>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col  py-2">
            <Collapsible className="border-t ">
              <CollapsibleTrigger>
                Can I use this in my project?
              </CollapsibleTrigger>
              <CollapsibleContent>hey</CollapsibleContent>
            </Collapsible>{' '}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
export function CollapseHandler() {
  return (
    <Collapsible>
      <CollapsibleTrigger className="">
        Can I use this in my project?
      </CollapsibleTrigger>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  )
}

export function CheckBox() {
  const [isCheck, setIsChecked] = useState<boolean>(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <div className="inline-flex w-fit items-center">
      <input
        type="checkbox"
        className="form-checkbox size-5 text-blue-600"
        checked={isCheck} // Bind the checked attribute to the isCheck state
        onChange={handleChange} // Handle changes to update the state
      />
    </div>
  )
}

interface SaveModelProps {
  onClick: () => void
}

export function SaveModel({ onClick }: SaveModelProps) {
  const isSelected = false
  return (
    <>
      {isSelected ? (
        <Button
          onClick={onClick}
          variant="outline"
          size={'icon'}
          className=" active:scale-110 active:duration-200 transition-transform bg-transparent hover:bg-transparent text-white border hover:border-stem-green-400"
        >
          {' '}
          <CircleMinus height={20} width={20} strokeWidth={1.5} />
        </Button>
      ) : (
        <Button
          onClick={onClick}
          variant="outline"
          size={'icon'}
          className=" active:scale-110 active:duration-200 transition-transform bg-transparent hover:bg-transparent text-white border hover:border-stem-green-400"
        >
          <CirclePlus height={20} width={20} strokeWidth={1.5} />
        </Button>
      )}
    </>
  )
}
