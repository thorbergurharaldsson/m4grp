import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBpgFDL58W5iJWNnZZj_4iwzgJl2PTxQHM",
  authDomain: "seeds-dc572.firebaseapp.com",
  projectId: "seeds-dc572",
  storageBucket: "seeds-dc572.appspot.com",
  messagingSenderId: "1031195476096",
  appId: "1:1031195476096:web:377a41c8078da0a3cba665",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
