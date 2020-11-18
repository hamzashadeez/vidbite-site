import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDuNE4MbeoSZRjAABNDeb8uksLYwXtBHmU",
  authDomain: "vidbite-e79be.firebaseapp.com",
  databaseURL: "https://vidbite-e79be.firebaseio.com",
  projectId: "vidbite-e79be",
  storageBucket: "vidbite-e79be.appspot.com",
  messagingSenderId: "168985600908",
  appId: "1:168985600908:web:9246151ab814a10875eca9",
  measurementId: "G-8W5EMMHZGP",
});
const storage = firebaseApp.storage();
const auth = firebaseApp.auth();
const db = firebaseApp.database();

export { db, storage, auth };
