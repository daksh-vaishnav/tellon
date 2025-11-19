import prisma from "../../prisma/prismaClient.js"

export const getAllMarketService = async () => {
    try {
        return await prisma.market.findMany({})
    } catch (error) {
        throw error
    }
}