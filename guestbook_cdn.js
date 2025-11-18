import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyCGNeDfVZihhr5_Wva0BcPWA0RC2TU9ZR8",
  authDomain: "junghokor-guestbook.firebaseapp.com",
  databaseURL: "https://junghokor-guestbook-default-rtdb.firebaseio.com",
  projectId: "junghokor-guestbook",
  storageBucket: "junghokor-guestbook.appspot.com",
  messagingSenderId: "1060425715746",
  appId: "1:1060425715746:web:775a1f1027caedbc2dfa7b"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 필요한 기능 export
export { db, ref, push, set, onValue, remove };
