'use client' // Error components must be Client Components
import { toast } from 'sonner'
import { useEffect, useState } from 'react'
import { UserRoundSearchIcon } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

export function ErrorToast() {
  const path = usePathname()
  const error = useSearchParams().get('error')
  const [err, setErr] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (error) {
      setErr(error)
      toast.error(err)
    }

    setTimeout(() => {
      router.replace(path)
    }, 500)
  }, [error])

  return null
}
