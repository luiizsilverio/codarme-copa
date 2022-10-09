import { hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const create = async (ctx) => {
  const { name, username, email } = ctx.request.body;
  let { password } = ctx.request.body;

  password = await hash(password, 10);

  const data = {
    name,
    username,
    email, 
    password
  }

  try {
    const user = await prisma.user.create({ 
      data,
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        created_at: true,
        updatedAt: true
      } 
    });

    ctx.body = user;
    ctx.status = 201;

  } catch (error) {
      console.warn(error)
      ctx.body = error;
      ctx.status = 500;
  }
}

export const list = async (ctx) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        created_at: true,
        updatedAt: true
      } 
    });
    
    ctx.body = users;
    ctx.status = 200;

  } catch (error) {
      console.warn(error)
      ctx.body = error;
      ctx.status = 500;
  }
}

export const login = async (ctx) => {
  const [, token] = ctx.headers.authorization.split(" ");
  const [email, password] = atob(token).split(":");

  const user = await prisma.user.findFirst({
    where: { email }    
  })
  
  if (!user) {
    ctx.status = 404;
    return;
  }

  const userPassword = user.password;
  delete user.password;
  
  const passwordMatch = await compare(password, userPassword);

  if (!passwordMatch) {
    ctx.status = 404;
    return;
  }

  const accessToken = jwt.sign(
    {
      sub: user.id,
      name: user.name,
      expiresIn: "7d"
    }, 
    process.env.JWT_SECRET    
  );


  ctx.body = {
    user,
    accessToken
  };
}

export const hints = async (ctx) => {
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

  ctx.body = {
    name: user.name,
    hints
  };
}