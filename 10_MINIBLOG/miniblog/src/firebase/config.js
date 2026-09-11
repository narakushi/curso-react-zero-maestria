
import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCKQzCUd3g213tYhWeV6XFI_yhxl6EtHzI",
  authDomain: "miniblog-320f9.firebaseapp.com",
  projectId: "miniblog-320f9",
  storageBucket: "miniblog-320f9.firebasestorage.app",
  messagingSenderId: "300497242965",
  appId: "1:300497242965:web:7766e583442f3e346cfddc"
};


const app = initializeApp(firebaseConfig);

const db = getFireStore(app);

export { db };