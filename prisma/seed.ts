import prisma from "./prismaClient.js"

enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
}

async function main() {
    await createUser();
    await createMarket();
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

async function createUser(){
    const daksh = await prisma.user.upsert({
        where: { email: 'daksh@tellon.io' },
        update: {},
        create: {
            role: UserRole.USER,
            username: 'Daksh',
            email: 'daksh@tellon.io',
            password: "password123",
            balance: 1000
        },
    })
    const dhaval = await prisma.user.upsert({
        where: { email: 'dhaval@tellon.io' },
        update: {},
        create: {
            role: UserRole.ADMIN,
            username: 'Dhaval',
            email: 'dhaval@tellon.io',
            password: "admin123",
            balance: 1000
        },
    })
    console.log({ daksh, dhaval });
}


async function createMarket(){
    const market = await prisma.market.create({
        data: {
            title: "Will it rain tomorrow?",
            thumbnail: "https://picsum.photos/200.webp",
            outcomes: {
                create: [
                    {
                        label: "",
                        type: "YES"
                    },
                    {
                        label: "",
                        type: "NO"
                    }]
            }
        }
    })
    const market2 = await prisma.market.create({
        data: {
            title: "Who Will next cricket world cup?",
            thumbnail: "https://picsum.photos/200.webp",
            outcomes: {
                create: [
                    {
                        label: "India",
                        type: "YES"
                    },
                    {
                        label: "India",
                        type: "NO"
                    },
                    {
                        label: "Australia",
                        type: "YES"
                    },
                    {
                        label: "Australia",
                        type: "NO"
                    },
                    {
                        label: "New Zealand",
                        type: "YES"
                    },
                    {
                        label: "New Zealand",
                        type: "NO"
                    },
                    {
                        label: "West Indies",
                        type: "NO"
                    },
                    {
                        label: "West Indies",
                        type: "NO"
                    },]
            }
        }
    })
    console.log({ market, market2 });
}