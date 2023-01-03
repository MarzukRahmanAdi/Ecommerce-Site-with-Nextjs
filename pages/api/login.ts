import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


export default async (req: NextApiRequest, res: NextApiResponse) => {
const prisma = new PrismaClient()
  const secret = "234873465673457zxxczxczcac"

  const request = req.body;
  const email = request.email;
  const password = request.password;

  if(email==="admin@admin.com" && password==="1234"){
    const token = await jwt.sign({name : "Admin",  email, role: "admin" }, secret)
    res.status(200).json({success: true, message : token})
  }

  const user = await prisma.user.findUnique({
    where:{
      email: email
    }
  })
  if(!user) return res.status(200).json({success: false, message : "User not found"})
  bcrypt.compare(password, user?.password, async function(err, result) {
    if(result){
      const token = await jwt.sign({name : user.name,  email, role: "Customer" }, secret)
      res.status(200).json({success: true, message : token})

    } else{
      res.status(200).json({success: false, message : "Password didn't match"})
    }
  });
}
