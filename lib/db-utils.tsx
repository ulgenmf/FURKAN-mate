'use server'
// import { serverClient } from './supabase/server'

import { serverClient } from './supabase/server'

// export async function getUser() {
//   const {
//     data: { user }
//   } = await serverClient.auth.getUser()
// }

export async function supaGetAuth() {
  const supa = await serverClient()
  const {
    data: { user }
  } = await supa.auth.getUser()

  return user
}
