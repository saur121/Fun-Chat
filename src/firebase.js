
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBVy52bd0cXSG-njK3I7vseUlNvtFYd1A",
  authDomain: "chat-7db32.firebaseapp.com",
  projectId: "chat-7db32",
  storageBucket: "chat-7db32.appspot.com",
  messagingSenderId: "648603630385",
  appId: "1:648603630385:web:fd47c6e843c3b35ae9ce10"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app); 