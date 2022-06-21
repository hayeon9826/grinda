import prisma from "@lib/prisma";

export default async function handler(req, res) {
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
