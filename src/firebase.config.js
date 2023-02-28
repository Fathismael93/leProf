import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";

import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAXW9oWUEjsn0DIrv2TJMSezrpV_q5wJ3c",
  authDomain: "leprof-9b3bb.firebaseapp.com",
  projectId: "leprof-9b3bb",
  storageBucket: "leprof-9b3bb.appspot.com",
  messagingSenderId: "257184587710",
  appId: "1:257184587710:web:4eca0a385103734f1163ef",
  measurementId: "G-CKRX1XHGTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app