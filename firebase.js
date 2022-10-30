import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// if the app is not generated earlier then initialize else use existing one
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()


const db = app.firestore()

export {
  db
}