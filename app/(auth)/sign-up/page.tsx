'use client'
import Link from 'next/link'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { redirect, useRouter } from 'next/navigation'
import { login, signup } from '../auth-actions'
import { spinner } from '@/components/stocks'

export default function SignUp() {
  const [pass, setPass] = useState('')
  const [passConfirm, setPassConfirm] = useState('')
  const [isPasswordMatch, setIsPasswordMatch] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const resetButtonRef = useRef<HTMLButtonElement>(null)
  const formDataButtonRef = useRef<HTMLButtonElement>(null)

  async function handleSignUp(formData: FormData) {
    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (password !== confirmPassword) {
      setIsPasswordMatch(false)
      return
    }

    // console.log({ email, password, confirmPassword })
    setIsPasswordMatch(true)

    // Add your logic for handling the form submission
  }

  const submitHandler: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    if (pass !== passConfirm) {
      setIsPasswordMatch(false)
      resetButtonRef.current?.click()
    }
    formDataButtonRef.current?.click()
  }

  return (
    <div className="z-10 items-center justify-center p-5 duration-200 rounded-2xl">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-balance text-muted-foreground">
            Create an account to get started
          </p>
        </div>
        <form className="grid gap-4 bg-black/20 p-5 rounded-2xl focus-within:bg-black duration-200 active:bg-black">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              autoComplete="off"
              id="name"
              name="name"
              value={'Furkan'}
              type="text"
              placeholder="Joe Doe"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              autoComplete="off"
              id="email"
              name="email"
              value={'a@a.com'}
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              value={'123123123'}
              name="password"
              type="password"
              autoComplete="new-password"
              required
              onChange={e => setPass(e.target.value)}
              className={isPasswordMatch ? '' : 'animate-shake duration-300'}
            />
            {!isPasswordMatch && (
              <p className="text-xs text-red-500 mt-1">Passwords don't match</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              value={'123123123'}
              type="password"
              autoComplete="new-password"
              required
              onChange={e => setPassConfirm(e.target.value)}
              className={isPasswordMatch ? '' : 'animate-shake duration-300'}
            />
          </div>

          <button
            ref={formDataButtonRef}
            type="submit"
            hidden
            formAction={signup}
          >
            RESETBUTTON
          </button>
          {!isLoading ? (
            <Button
              onClick={submitHandler}
              className="w-full bg-stem-green-500"
            >
              Sign Up
            </Button>
          ) : (
            <div className="mx-auto p-2">{spinner}</div>
          )}
          <Button
            variant="outline"
            disabled
            className="cursor-not-allowed w-full"
          >
            Sign Up with Google
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/log-in" className="underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
