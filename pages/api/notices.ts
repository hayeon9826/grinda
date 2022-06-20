import prisma from "@lib/prisma";

export default async function handler(req, res) {
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
      skip: page ? parseInt(page) * parseInt(limit) : 0,
      take: parseInt(limit),
    });

    const test = await prisma.notice.findMany({
      where: { id: id },
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
            page: parseInt(page),
            objects,
            total_count: count,
            total_pages: Math.ceil(count / limit),
          }
    );
  }
}
