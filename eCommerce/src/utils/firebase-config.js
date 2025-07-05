import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAdRn-HKRPwF56Sb_lmBCDaHcfjrNzFIbM",
  authDomain: "shopcode-a0b2d.firebaseapp.com",
  projectId: "shopcode-a0b2d",
  storageBucket: "shopcode-a0b2d.firebasestorage.app",
  messagingSenderId: "902243208803",
  appId: "1:902243208803:web:c9a9aad1e2b8688b45b256",
  measurementId: "G-BVZNQ9V1KQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
