import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
  } else {
    const { id, category } = req.query;

    const objects = await prisma.faq.findMany({
      where: {
        ...(id ? { id: id } : {}),
        ...(category ? { category: category } : {}),
      },
    });

    return res.json(
      id
        ? objects[0]
        : {
            objects,
          }
    );
  }
}
