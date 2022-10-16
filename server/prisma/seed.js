import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    console.log(`Start seeding ...`)
    const transaction = await prisma.create({
        data: {
            amount: 20,
            isCompleted: false,
            people: {
              create: [
                    {
                        username: "Gunwoo",
                        username: "matthew"
                    }
                ]
            }
        },
    })

    console.log(`Seeding finished.`)
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })