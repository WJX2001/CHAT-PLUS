import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

// 全局作用域中找，没有的话就新建一个 PrismaClient 实例
const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV === 'production') globalThis.prisma = client

export default client
