// 'use server'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { ChevronUp } from 'lucide-react'
// import React, { cache } from 'react'
// import { supaGetAuth } from '@/lib/db-utils'
// import prismaC from '@/lib/prisma-client'
// import { Chat } from '@prisma/client'
// import { serverClient } from '@/lib/supabase/server'
// const loadChats = cache(async () => {
//   const chats = await getChats()
//   return chats?.reverse()
// })
// const userId = async () => await supaGetAuth()

// async function getChats(): Promise<Chat[]> {
//   const chats = await prismaC.chat.findMany({
//     where: { userId: user?.id }
//   }) // Use optional
//   return chats
// }
// async function UserMenu() {
//   const chats = await getChats()
//   const {
//     data: { user }
//   } = await serverClient().auth.getUser()
//   const userData = await prismaC.user.findFirst({
//     where: {
//       email: userId?.email
//     }
//   })
//   // console.log(userData)
//   return (
//     <div className="flex flex-col font-GeistSans items-start py-2 ">
//       <div className="flex items-center justify-center gap-3">
//         <Avatar className="size-8">
//           <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>
//         <span className="text-">{userData?.name}</span>
//         <button className="hover:scale-150 duration-200">
//           <ChevronUp size={20} />
//         </button>
//       </div>

//       <p className="text-stem-green-400 self-center hover:underline hover:text-stem-green-100 duration-150 text-xs mt-2">
//         {chats?.length} Projects
//       </p>
//     </div>
//   )
// }

// export default UserMenu
