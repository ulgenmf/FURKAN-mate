'use server'
// import { serverClient } from './supabase/server'

import { serverClient } from './supabase/server'

// export async function getUser() {
//   const {
//     data: { user }
//   } = await serverClient.auth.getUser()
// }

export async function supaGetAuth() {
  const {
    data: { user }
  } = await serverClient().auth.getUser()

  return user
}
