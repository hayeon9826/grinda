import { config } from "../src/firebase-json";
import admin, { ServiceAccount } from "firebase-admin";
import { getApp } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

export let adminApp;

try {
  adminApp = getApp("admin");
} catch (e) {
  adminApp = admin.initializeApp(
    {
      credential: admin.credential.cert(config as ServiceAccount),
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    },
    "admin"
  );
}

export const adminStorage = getStorage(adminApp);
