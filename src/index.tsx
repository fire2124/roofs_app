import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5XTUr2ToowiR4PlNgMdBmK6gPgrUC5YU",
  authDomain: "roofsapp.firebaseapp.com",
  projectId: "roofsapp",
  storageBucket: "roofsapp.appspot.com",
  messagingSenderId: "550066985067",
  appId: "1:550066985067:web:64fead9015ff1ec24bb92e",
  measurementId: "G-4TVL12JCBY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

AOS.init({ duration: 3000, once: true });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
