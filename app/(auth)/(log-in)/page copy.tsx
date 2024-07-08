'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="z-10 items-center justify-center p-5 duration-200 rounded-2xl ">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <form className="grid gap-4 bg-black/20 p-5 rounded-2xl focus-within:bg-black duration-200 active:bg-black">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              autoComplete="off"
              id="email"
              name="email"
              type="email"
              value={'a@a.com'}
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <button
                onClick={() => alert('Remember it then ?')}
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </button>
            </div>
            <Input
              id="password"
              name="password"
              value="123123123"
              type="password"
              autoComplete="off"
              required
            />
          </div>
          {!isLoading ? (
            <Button
              type="submit"
              // formAction={login}
              className="w-full bg-stem-green-500"
            >
              Login
            </Button>
          ) : (
            <div className="mx-auto p-2">
              <div
                className="spinner-border animate-spin inline-block size-8 border-4 rounded-full"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <Button
            variant="outline"
            disabled
            className="cursor-not-allowed w-full"
          >
            Login with Google
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
