import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqlo7F-cxYi75l6UrMQi0cjmlqvyUe_i4",
  authDomain: "finest-trip.firebaseapp.com",
  projectId: "finest-trip",
  storageBucket: "finest-trip.firebasestorage.app",
  messagingSenderId: "490477160691",
  appId: "1:490477160691:web:fd72a5d5e24ba72f294f86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;