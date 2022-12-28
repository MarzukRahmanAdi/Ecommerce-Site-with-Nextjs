import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client'
import bcrypt from 'bcrypt';

// fake login
export default async (req: NextApiRequest, res: NextApiResponse) => {
const prisma = new PrismaClient()

  const request = req.body;
  const email = request.email;
  const password = request.password;

  const user = await prisma.user.findUnique({
    where:{
      email: email
    }
  })
  if(!user) return res.status(200).json("User not found")
  bcrypt.compare(password, user?.password, function(err, result) {
    if(result){
      res.status(200).json("Success")
    } else{
      res.status(200).json("Password didn't match")
    }
  });
}
