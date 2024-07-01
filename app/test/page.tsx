import { ModelConfig } from './ModelConfig'
import { cache, Suspense } from 'react'
import T from './tt'
import TT from './ttt'
import prismaC from '@/lib/prisma-client'
import { serverClient } from '@/lib/supabase/server'
const getModelsList = cache(async () => {
  const models = await prismaC.aIModelPool.findMany()
  return models
})
export default async function Home() {
  const supabase = serverClient()
  const {
    data: { user }
  } = await supabase.auth.getUser()
  console.log(user)

  console.log(user)

  const models = await getModelsList()
  return (
    <>
      {/* <ModelConfig models={models} /> */}
      <T models={models} />
      {/* <TT models={models} /> */}
    </>
  )
}
