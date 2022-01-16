import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDIOz7Y-IUPk6y8yDlQhLpb0V-8gjGesRk",
    authDomain: "pokedex-react-129b0.firebaseapp.com",
    projectId: "pokedex-react-129b0",
    storageBucket: "pokedex-react-129b0.appspot.com",
    messagingSenderId: "501046384510",
    appId: "1:501046384510:web:6e5bbbfc8b0ca1806c052f"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  

