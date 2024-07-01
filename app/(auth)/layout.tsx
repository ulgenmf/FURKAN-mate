import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useSearchParams } from 'next/navigation'
import { DisableContextMenu } from '@/lib/hooks/disable-contextMenu'
import { revalidatePath } from 'next/cache'
import { Suspense, useEffect, useState } from 'react'
import { ErrorToast } from './err'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex items-center justify-center  m-auto bg-transparent  border   lg:min-h-[600px]  xl:min-h-[800px]">
      {/* <DisableContextMenu /> */}
      <ErrorToast />
      <video
        preload="true"
        autoPlay
        loop
        controls={false} // Disables default controls
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/space.mp4" type="video/mp4" />
      </video>
      {children}
      <div className=" z-10"></div>
    </div>
  )
}
