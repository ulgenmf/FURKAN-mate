// import React from 'react'
// import {
//   Diamond,
//   Octagon,
//   Search,
//   Hexagon,
//   Pentagon,
//   Circle,
//   Squircle
// } from 'lucide-react'
// import { Badge } from '@/components/ui/badge'
// import { randomColor } from '@/lib/utils'
// import { ChatHistory } from '@/components/chat-history'
// import { Input } from '@/components/ui/input'

// function SidebarWrapper({ user }) {
//   return (
//     <div className="flex over flex-col px-2">
//       <UserMenu user={user} />
//       <General />
//       <Projects />
//     </div>
//   )
// }

// export default SidebarWrapper

// export function General() {
//   return (
//     <div className="flex flex-col py-4 border-y border-noble-black-500">
//       <p className="text-noble-black-400 text-sm">General</p>
//       <form>
//         <div className="flex flex-col gap-4 mt-4">
//           <div className="flex items-center gap-4 text-lg">
//             <Search size={20} />
//             <Input type="text" name="searchQuery" placeholder="Search..." />
//             <button type="submit"></button>
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }

// export function Projects() {
//   return (
//     <div className="flex h-fit overlow-hidden flex-col py-4 border-t border-noble-black-500">
//       <p className="text-noble-black-400 text-sm mb-4">Projects</p>
//       <div className="flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-200px)]">
//       </div>
//     </div>
//   )
// }
