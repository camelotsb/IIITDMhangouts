import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";
function init(){
// Import the functions you need from the SDKs you need
;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF_YeGI5gwab62e5lTuGcLspT3bmJM4rM",
  authDomain: "gdsc-storage-5b8ab.firebaseapp.com",
  databaseURL: "https://gdsc-storage-5b8ab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gdsc-storage-5b8ab",
  storageBucket: "gdsc-storage-5b8ab.appspot.com",
  messagingSenderId: "694473698039",
  appId: "1:694473698039:web:507a351f4993d66b9981f2",
  measurementId: "G-RRWSRBENWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



}
init()

function writeUserData(userId, name, email, imageUrl) {

    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }