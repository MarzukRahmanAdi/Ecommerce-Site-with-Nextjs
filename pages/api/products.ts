import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client'

// fake data
import products from '../../utils/data/products';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient()

  console.log(req);
  //MONGODB_URL
  // fake loading time
  // const Product = await prisma.product.create({
  //   data: {
  //     name: 'Elsa Prisma',
  //     Desc : "String?",
  //     price :  123,
  //     images : "https://i.shgcdn.com/d889a617-5c74-4ddd-aad4-21a16039c757/-/format/auto/-/preview/3000x3000/-/quality/best/",
  //     quantityAvailable :131
  //   },
  // }) 
  const Product = await prisma.product.findMany();
  
  setTimeout(() => {
    res.status(200).json(Product);
  }, 800);
}
