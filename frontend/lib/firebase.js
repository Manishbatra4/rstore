import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg_dl0GRXFS2TPVXeNWOuh-b4YuBeh_X8",
  authDomain: "dclinic-mac4.firebaseapp.com",
  projectId: "dclinic-mac4",
  storageBucket: "dclinic-mac4.appspot.com",
  messagingSenderId: "667393137113",
  appId: "1:667393137113:web:3d0957466e3a29e2b7a1c8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
