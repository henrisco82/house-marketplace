import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrYiZmI8d7BO0BNoXnaeclwFW0zukJu1k",
  authDomain: "house-marketplace-83e06.firebaseapp.com",
  projectId: "house-marketplace-83e06",
  storageBucket: "house-marketplace-83e06.appspot.com",
  messagingSenderId: "87542159461",
  appId: "1:87542159461:web:fc7f802699ca5d31eb8e8c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);