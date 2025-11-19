import { PrismaClient, OrderType } from '@prisma/client';

const prisma = new PrismaClient();

export const {
    user,
    market,
    orderbook,
    outcome,
    trade,
    liquidityAction,
    marketCategory,
    userHolding
} = prisma;


export default prisma;