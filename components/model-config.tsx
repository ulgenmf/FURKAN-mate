'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { getModelIcon } from '@/components/ui/icons'
import { Models } from '@/lib/types'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@radix-ui/react-collapsible'
import {
  ChevronsUpDown,
  CircleMinus,
  CirclePlus,
  SquareArrowOutUpRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

export function ModelConfig({
  allModels
}: {
  allModels: Array<{ id: string; data: any }>
}) {
  function onModelClick(mdl: any) {}
  return (
    <Dialog>
      <DialogTrigger>
        {' '}
        <MixerHorizontalIcon />
      </DialogTrigger>
      <DialogContent className="flex flex-col h-3/4  w-screen overflow-auto">
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>asd</DialogDescription>
        {allModels.map(mdl => (
          <Collapsible
            key={mdl.id}
            className=" flex flex-col font-GeistSans  text-white border border-noble-black-800 hover:border-stem-green-500 duration-200 border-collapse rounded-lg p-2 justify "
          >
            <div className="flex items-start justify-start">
              <SaveModel onClick={() => onModelClick(mdl)} />
              <CollapsibleTrigger className="flex flex-col flex-1 text-center relative items-center justify-center ">
                <div className="flex gap-2  w-full      justify-start items-center  pl-10">
                  {getModelIcon(`${mdl.data!.architecture.tokenizer}`)}
                  <p className="max-w-72 truncate  p-1  duration-300   overflow-clip ">
                    {mdl.data.name}
                  </p>
                </div>

                <div className="flex  text-xs text-noble-black-300 items-center     gap-10">
                  <div className="flex flex-col   p-1">
                    Context
                    <div className="border-b border-stem-green-500/50" />
                    <span className="ml-1  m-1">{mdl.data.context_length}</span>
                  </div>{' '}
                  <div className="flex flex-col   p-1">
                    Input
                    <div className="border-b border-stem-green-500/50" />
                    <span className="ml-1 mt-1">
                      {(parseFloat(mdl.data.pricing.prompt) * 100000).toFixed(
                        2
                      )}{' '}
                      $
                    </span>
                  </div>{' '}
                  <div className="flex flex-col   p-1">
                    Output
                    <div className="border-b border-stem-green-500/50" />
                    <span className="ml-1 mt-1">
                      {(parseFloat(mdl.data.pricing.prompt) * 100000).toFixed(
                        2
                      )}{' '}
                      $
                    </span>
                  </div>{' '}
                  <div className="flex flex-col   p-1">
                    Image
                    <div className="border-b border-stem-green-500/50" />
                    <span className="ml-1  mt-1">
                      {(parseFloat(mdl.data.pricing.prompt) * 100000).toFixed(
                        2
                      )}{' '}
                      $
                    </span>
                  </div>
                </div>

                <ChevronsUpDown
                  height={30}
                  width={30}
                  strokeWidth={2}
                  className="border p-1 -z-10 rounded-lg absolute top-0 right-0"
                />
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="flex flex-col  py-2">
              <p className="p-2 border-y text-center    break-words border-x-lime-400">
                {mdl.data.description}
                <Link
                  href={`https://openrouter.ai/models/${mdl.data.id}`}
                  passHref
                  legacyBehavior
                >
                  <a target="_blank" rel="noopener noreferrer">
                    <SquareArrowOutUpRight
                      height={25}
                      width={25}
                      className="text-noble-black-300 duration-200 hover:text-lime-400"
                    />
                  </a>
                </Link>
              </p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </DialogContent>
    </Dialog>
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
        className="form-checkbox h-5 w-5 text-blue-600"
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
