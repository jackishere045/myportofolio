// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, Timestamp} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAy2sm86PXK5jt0NxLVDnZFjgDRZNgUvOM",
  authDomain: "myportofolio-jackdev.firebaseapp.com",
  projectId: "myportofolio-jackdev",
  storageBucket: "myportofolio-jackdev.appspot.com", // ← ini kamu tadi typo: "firebasestorage.app"
  messagingSenderId: "264104324468",
  appId: "1:264104324468:web:66b8baa3e38303b246d021",
  measurementId: "G-HTH23JZ4NJ"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Ekspor semua yang dibutuhkan
export {
  app,
  analytics,
  db,
  storage,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  Timestamp
};
