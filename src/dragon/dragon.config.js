// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXaphQ3AtWhyRTCOkj1SkdLhWvdDWei9A",
  authDomain: "dragon-hunt-abrar.firebaseapp.com",
  projectId: "dragon-hunt-abrar",
  storageBucket: "dragon-hunt-abrar.appspot.com",
  messagingSenderId: "1065288554015",
  appId: "1:1065288554015:web:3cfb03db9875233de5a72a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default auth;
export default app;