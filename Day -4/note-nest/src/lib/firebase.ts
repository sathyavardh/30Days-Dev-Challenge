
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //To call firestore db


const firebaseConfig = {
  apiKey: "AIzaSyD_Vmievd6d5IR98B9fflGOfYbI6z2umfQ",
  authDomain: "notenest-996d5.firebaseapp.com",
  projectId: "notenest-996d5",
  storageBucket: "notenest-996d5.firebasestorage.app",
  messagingSenderId: "199663681269",
  appId: "1:199663681269:web:5fb79dd40fbc5fea570fbc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};