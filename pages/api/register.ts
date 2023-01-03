import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { PrismaClient, Prisma } from '@prisma/client'
import jwt from 'jsonwebtoken'

// fake login
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const secret = "234873465673457zxxczxczcac"
  const prisma = new PrismaClient()
  const request = req.body;
  console.log(request.name, request.email, request.password)
  const name = request.name;
  const email = request.email;
  const password = request.password;
  const saltRounds = 6;
  bcrypt.hash(password, saltRounds, async function(err, hash) {
    if(err) {
        res.status(200).json({success: false,  message : err});
        return
    } 
    try{
      const user = await prisma.user.create({
        data:{
            name, email, password: hash, role: "Customer"
        }
    });
    const token = await jwt.sign({name, email, role: "Customer"}, secret)
    res.status(200).json({success: true, message: token});
    }
    catch(err){
      res.status(200).json({success: false, message :  err});
    }

  }); 
}
