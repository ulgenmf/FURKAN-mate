import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const prismaC = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') {
  if (!globalThis.prisma) {
    console.log('Creating new PrismaClient instance')
  }
  globalThis.prisma = prismaC
}

export default prismaC
