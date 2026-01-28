// // import { initializeApp, getApps } from "firebase/app";
// // import { getAuth } from "firebase/auth";

// // const firebaseConfig = {
// //   apiKey: "YOUR_API_KEY",
// //   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
// //   projectId: "YOUR_PROJECT_ID",
// //   storageBucket: "YOUR_PROJECT_ID.appspot.com",
// //   messagingSenderId: "YOUR_SENDER_ID",
// //   appId: "YOUR_APP_ID",
// // };

// // const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
// // const auth = getAuth(app);

// // export { auth };
// // Import the functions you need from the SDKs you need
// import { FirebaseApp, initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCAqZqXf8_5Zbg6beiMuJ60XYtHfsw_kRI",
//   authDomain: "newguide-430a0.firebaseapp.com",
//   projectId: "newguide-430a0",
//   storageBucket: "newguide-430a0.firebasestorage.app",
//   messagingSenderId: "712764557441",
//   appId: "1:712764557441:web:8b4e69e9da70929aa86580"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// function getFirestore(app: FirebaseApp) {
//   throw new Error("Function not implemented.");
// }
// lib/firebase.tsx
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAqZqXf8_5Zbg6beiMuJ60XYtHfsw_kRI",
  authDomain: "newguide-430a0.firebaseapp.com",
  projectId: "newguide-430a0",
  storageBucket: "newguide-430a0.firebasestorage.app",
  messagingSenderId: "712764557441",
  appId: "1:712764557441:web:8b4e69e9da70929aa86580",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
