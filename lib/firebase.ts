import { initializeApp, getApp, FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export let app: FirebaseApp;
export const firebaseConfig = {
  apiKey: "AIzaSyDnD3huXP9QBnMe4FyR5Bq-IHe9d_ayTuc",
  authDomain: "semu-32ecd.firebaseapp.com",
  projectId: "semu-32ecd",
  storageBucket: "semu-32ecd.appspot.com",
  messagingSenderId: "770552710972",
  appId: "1:770552710972:web:513dccd2a09e27093a0039",
  measurementId: "G-XCGDS10NFX",
};

// Initialize Firebase
try {
  app = getApp("app");
} catch (e) {
  app = initializeApp(firebaseConfig, "app");
}

export const analytics = getAnalytics(app);
