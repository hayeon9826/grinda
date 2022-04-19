import prisma from "./prisma";
import { parseCookies } from "nookies";
import { adminApp, adminStorage } from "./admin";

export const getCurrentUser = async (req) => {
  try {
    const cookies = parseCookies({ req });
    const token = await adminApp.auth().verifyIdToken(cookies.token);
    const { uid } = token;
    const user = await prisma.user.findFirst({
      where: { firebaseId: uid },
    });
    return { id: user.id, nickname: user.nickname };
  } catch (e) {
    return null;
  }
};
