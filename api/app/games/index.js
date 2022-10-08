import { addDays } from 'date-fns';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export const list = async (ctx) => {
  const { gameTime } = ctx.request.query;

  try {
    const games = await prisma.game.findMany({
      where: {
        gameTime: gameTime ? {
          gte: gameTime,
          lt: addDays(new Date(gameTime), 1)
        } : {}
      }
    });    

    ctx.body = games;
    ctx.status = 200;

  } catch (error) {
      console.warn(error)
      ctx.body = error;
      ctx.status = 500;
  }
}
