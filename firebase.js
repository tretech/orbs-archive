import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  // 🔐 Paste your Firebase config here
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
