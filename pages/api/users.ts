import prisma from "@lib/prisma";
import { getCurrentUser } from "@lib/backend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const currentUser = await getCurrentUser(req);

  // GET 요청
  // id가 current이고 로그인 상태이면 현재 유저 정보를 반환, 그 외에는 사용자 프로필 정보
  if (req.method === "POST") {
    const { name, email, firebaseId } = req.body;
    const object = await prisma.user.create({
      data: {
        name,
        email,
        firebaseId,
      },
    });
    return res.json(object);
  } else {
    const currentId = id === "current" && currentUser ? currentUser.id : id;
    let objects;
    objects = await prisma.user.findMany({
      where: currentId ? { id: currentId } : {},
      select: {
        id: true,
        name: true,
        email: true,
        userType: true,
      },
    });
    return res.json(id ? objects[0] : objects);
  }
}
