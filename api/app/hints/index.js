import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const create = async (ctx) => {
  const { gameId, homeTeamScore, awayTeamScore } = ctx.request.body;
  const authorization = ctx.headers.authorization;

  if (!authorization) {
    ctx.status = 403;
    return;
  }

  const [, token] = ctx.headers.authorization.split(" ");
  let userId;

  // Verifica campos obrigatórios
  if (homeTeamScore === null && awayTeamScore === null) {
    ctx.status = 400;
    return;
  }

  // Verifica se o token JWT é válido
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    userId = decoded.sub;

  } catch (error) {
    ctx.status = 403;
    return;
  }

  const data = {
    userId,
    gameId,
    homeTeamScore: homeTeamScore,
    awayTeamScore: awayTeamScore
  }

  try {
    let hint;
    const exists = await prisma.hint.findFirst({
      where: { userId, gameId }
    });

    if (exists) {
      hint = await prisma.hint.updateMany({
        where: { userId, gameId },
        data: {
          homeTeamScore,
          awayTeamScore
        }
      })    
    } 
    else {
      hint = await prisma.hint.create({ data });
    }
  
    ctx.body = hint;
    ctx.status = 200;        

  } catch (error) {
      console.warn(error)
      ctx.body = error;
      ctx.status = 500;
  }
}

export const list = async (ctx) => {
  const username = ctx.request.params.username;
  const user = await prisma.user.findFirst({
    where: { username }
  });

  if (!user) {
    ctx.status = 404;
    return;
  }

  const hints = await prisma.hint.findMany({
    where: {
      userId: user.id
    },
    // include: { game: true }
  })

  ctx.body = hints;
}