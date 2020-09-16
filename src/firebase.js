import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBYXiG6zsAFoR9QkMYNVkqZSs_svYWtLSI",
  authDomain: "clone-81a8b.firebaseapp.com",
  databaseURL: "https://clone-81a8b.firebaseio.com",
  projectId: "clone-81a8b",
  storageBucket: "clone-81a8b.appspot.com",
  messagingSenderId: "94090470526",
  appId: "1:94090470526:web:d543a86d1f76089b68e42f",
  measurementId: "G-6RRNTRH6T2",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
