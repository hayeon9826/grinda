import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
  } else {
    const { id, q, page, limit = 10 } = req.query;

    const objects = await prisma.notice.findMany({
      where: {
        ...(id ? { id: id } : {}),
        ...(q
          ? {
              OR: [{ title: { contains: q } }, { body: { contains: q } }],
            }
          : {}),
      },
      skip: page ? Number(page) * Number(limit) : 0,
      take: Number(limit),
    });

    const count = await prisma.notice.count({
      where: {
        ...(q
          ? {
              OR: [{ title: { contains: q } }, { body: { contains: q } }],
            }
          : {}),
      },
    });

    return res.json(
      id
        ? objects[0]
        : {
            page: Number(page),
            objects,
            total_count: count,
            total_pages: Math.ceil(count / Number(limit)),
          }
    );
  }
}
