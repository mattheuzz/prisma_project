import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const mainUpdate = async () => {
  const courseUpdated = await prisma.courses.update({
    where: {
      id: 'uuid',
    },
    data: {
      duration: 1000
    }
  })
  console.log(courseUpdated)
}

mainUpdate()
