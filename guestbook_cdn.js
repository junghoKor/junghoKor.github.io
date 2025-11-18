// firebase_cdn.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onChildAdded,
  remove
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

// Firebase 설정 및 초기화
const firebaseConfig = {
  apiKey: "AIzaSyCGNeDfVZihhr5_Wva0BcPWA0RC2TU9ZR8",
  authDomain: "junghokor-guestbook.firebaseapp.com",
  databaseURL: "https://junghokor-guestbook-default-rtdb.firebaseio.com",
  projectId: "junghokor-guestbook",
  storageBucket: "junghokor-guestbook.firebasestorage.app",
  messagingSenderId: "1060425715746",
  appId: "1:1060425715746:web:775a1f1027caedbc2dfa7b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 외부에서 사용할 수 있도록 export
export { db, ref, push, onChildAdded, remove };
