'use client'

import React, { useState } from 'react'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import { X } from 'lucide-react'
import { Models } from '@/lib/types'

interface ModelConfigProps {
  models: Models[]
}

export function TT({ models }: ModelConfigProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <button
        onClick={openModal}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
      >
        <MixerHorizontalIcon />
      </button>
      {isModalOpen && (
        <CustomModal onClose={closeModal} title="Available Models List">
          <ModelList models={models} />
        </CustomModal>
      )}
    </>
  )
}

function CustomModal({ onClose, title, children }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-2xl max-h-[80vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

const ModelList = React.memo(({ models }: { models: Models[] }) => {
  return (
    <div className="space-y-4">
      {models.map(model => (
        <ModelItem key={model.id} model={model} />
      ))}
    </div>
  )
})

const ModelItem = React.memo(({ model }: { model: Models }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">{model.data.name}</p>
          <p className="text-sm text-gray-500">
            Input: ${(parseFloat(model.data.pricing.prompt) * 100000).toFixed(2)}
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      {isExpanded && (
        <div className="mt-4">
          {/* Add your expanded content here */}
          <p>Additional model details...</p>
        </div>
      )}
    </div>
  )
})

export default TT