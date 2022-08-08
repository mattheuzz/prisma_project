import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const mainFIndOne = async () => {
  const course = await prisma.courses.findFirst()
  console.log(course)
}

mainFIndOne()
