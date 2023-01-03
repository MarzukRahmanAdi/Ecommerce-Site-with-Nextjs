
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


export default async (req: NextApiRequest, res: NextApiResponse) => {
console.log("decoded1----------------------------------------")

  const secret = "234873465673457zxxczxczcac"
  const token = req.body.token

  console.log(req.body)
  var decoded = await jwt.verify(token, secret);
console.log("decoded----------------------------------------")

console.log(decoded)
  res.status(200).json({success: true, message : decoded })

}
