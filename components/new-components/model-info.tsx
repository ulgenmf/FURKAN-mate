'use client'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription
} from '@radix-ui/react-dialog'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import { useAIState } from 'ai/rsc'
import { getModelIcon } from '../ui/icons'
import Link from 'next/link'
import { SquareArrowOutUpRight } from 'lucide-react'

const ModelInfo = () => {
  const [aiState] = useAIState()
  const icon = getModelIcon(aiState?.model.data.architecture.tokenizer)

  return (
    <Dialog defaultOpen>
      <DialogTrigger>
        {' '}
        <MixerHorizontalIcon />
      </DialogTrigger>
      <DialogContent className="flex flex-col h-4/5  w-full absolute inset-0 font-orbitron  m-auto ">
        <DialogDescription>
          <ModelInfoScreen model={aiState.model} />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default ModelInfo

const ModelInfoScreen = ({ model }: any) => {
  const icon = getModelIcon(model.data.architecture.tokenizer, 30, 30)

  return (
    <div className="p-5 max-w-4xl  rounded-lg bg-black  border-t mt-1 text-center mx-auto">
      <h1 className="text-2xl font-bold mb-2">
        <div className="flex items-center justify-center gap-4 ch">
          {icon} {model.data.name}
          <Link
            href={`https://openrouter.ai/models/${model.data.id}`}
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
        </div>
      </h1>
      <p className="mb-4">{model.data.description}</p>

      <div className="flex items-center justify-center gap-28">
        <div className="flex justify-center flex-col  items-center pl-5 mb-4">
          <h2 className="text-xl font-medium mb-2 border-b">Pricing</h2>
          <p>Prompt: {model.data.pricing.prompt} ETH</p>
          <p>Request: {model.data.pricing.request} ETH</p>
          <p>Completion: {model.data.pricing.completion} ETH</p>
        </div>
        <div className="flex justify-center flex-col  items-center pl-5 mb-4">
          {' '}
          <h2 className="text-xl  border-b font-medium mb-2">Architecture</h2>
          <p>
            <strong>Modality:</strong> {model.data.architecture.modality}
          </p>
          <p>
            <strong>Tokenizer:</strong> {model.data.architecture.tokenizer}
          </p>
          <p>
            <strong>Instruct Type:</strong>{' '}
            {model.data.architecture.instruct_type}
          </p>
        </div>
      </div>
      <h2 className="text-xl font-medium mb-2">Context Length</h2>
      <p>{model.data.context_length} tokens</p>
    </div>
  )
}
