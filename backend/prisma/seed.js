import { config } from 'dotenv'
import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from '../src/generated/prisma/index.js'

config()


const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaNeon({ connectionString })
const prisma = new PrismaClient({ adapter })



async function main() {
    const seedAgents = [
        { name: "Test Agent 1" },
        { name: "Test Agent 2" },
        { name: "Test Agent 3" },
    ]

    console.log('Agents seed started ....')

    const agents = await prisma.agent.createMany({ data: seedAgents })

    console.log('Agents seed completed ....')
    console.log(agents)
}

main().catch(error => {
    console.log(error)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})