'use client'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export function CheckScreenSize() {
  const isScreenWideEnough = useMediaQuery({ minWidth: 800 })
  const [isError, setIsError] = useState(false)

  if (!isScreenWideEnough) {
    return (
      <div className="h-screen w-screen flex  z-[100] items-center justify-center  bg-black z-100 fixed">
        <p className='p-10 text-pretty text-center text-xl'>
          {' '}
          I am currently focusing on finalizing other critical features. Rest
          assured, enhancing the responsiveness of our AI chat application is a
          top priority, and we're committed to delivering an improved user
          experience soon. Please use it on desktop for the best experience.
        </p>
      </div>
    )
  }

  return
}
