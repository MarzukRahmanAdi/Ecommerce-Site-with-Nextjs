import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { PrismaClient, Prisma } from '@prisma/client'
// fake login
export default async (req: NextApiRequest, res: NextApiResponse) => {
const prisma = new PrismaClient()
  const request = req.body;
  console.log(request.name, request.email, request.password)
  const name = request.name;
  const email = request.email;
  const password = request.password;
  const saltRounds = 6;
  bcrypt.hash(password, saltRounds, async function(err, hash) {
    if(err) {
        res.status(200).json(err.message);
        return
    } 
    const user = await prisma.user.create({
        data:{
            name, email, password: hash, role: "Customer"
        }
    });
    res.status(200).json(user);

  }); 
}
