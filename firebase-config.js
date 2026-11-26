import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3ZXFLSX4tPFlokb0YviXTPVYwjMVvo5E",
  authDomain: "veranda-cafe-177bb.firebaseapp.com",
  projectId: "veranda-cafe-177bb",
  storageBucket: "veranda-cafe-177bb.firebasestorage.app",
  messagingSenderId: "1060186792112",
  appId: "1:1060186792112:web:bf4957af360d5653411b75",
  measurementId: "G-D077E49CDV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
