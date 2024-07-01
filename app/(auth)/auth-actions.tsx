'use server'

import prismaC from '@/lib/prisma-client'
import { serverClient } from '@/lib/supabase/server'
import { Prisma } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
const supabase = serverClient()
export async function login(formData: FormData) {
  console.log(formData)
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  }
  console.log('\x1b[32m ################################################# \x1b[0m')
  console.log('\x1b[33m ################################################# \x1b[0m')
  console.log(data)

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.error(error)
    return redirect('/log-in?error=Could not authenticate user')
  }

  return redirect('/')
}

export async function signup(formData: FormData) {
  const data = {
    email: formData.get('email') as string,
    name: formData.get('name') as string,
    password: formData.get('password') as string
  }
  try {
    const { data: authData, error } = await supabase.auth.signUp(data)
    revalidatePath('/sig-up', 'layout')
    if (error) {
      return redirect(`/sign-up?error=${error}`)
    }

    if (authData.user) {
      const newUser = await prismaC.user.create({
        data: {
          id: authData.user.id, // Use the ID from Supabase
          email: data.email,
          name: data.name,
          password: data.password,
          apiKeys: {} // Initialize with an empty object or appropriate default
        }
      })
    } else {
      throw new Error('User data not returned from Supabase')
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        console.error(
          'There is a unique constraint violation, a new user cannot be created with this email'
        )
      } else {
        console.error(e)
      }
    }
    throw e
  }
  redirect('/')
}
