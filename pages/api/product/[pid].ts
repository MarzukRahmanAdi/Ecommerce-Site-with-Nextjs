import type { NextApiRequest, NextApiResponse } from 'next';

// fake data
import { PrismaClient, Prisma } from '@prisma/client'


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()

  const {
    query: { pid },
  } = req

  const product = await prisma.product.findUnique({
    where:{
      id: pid
    }
  })
  res.status(200).json(product);
}
