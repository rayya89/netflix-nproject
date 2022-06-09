import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Properties
const firebaseConfig = {
  apiKey: "AIzaSyCPu_g8dnoqioACw8Vm1n6uOYjaBEdfDyw",
  authDomain: "netflix-nproject.firebaseapp.com",
  projectId: "netflix-nproject",
  storageBucket: "netflix-nproject.appspot.com",
  messagingSenderId: "463623838818",
  appId: "1:463623838818:web:a0662889eac48b65bf053b",
};

const firebaseApp = initializeApp(firebaseConfig);

export const fireStore = getFirestore(firebaseApp);
export const cloudStorage = getStorage(firebaseApp);
export const authentification = getAuth(firebaseApp);
