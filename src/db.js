// import * as firebase from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from 'firebase/auth'
// import database from 'firebase/compat/database'

// const firebaseConfig = {
//     // API KEYS
//     apiKey: "AIzaSyBRZ7kkCYWtcXNQ_yTpTu-XNZ6V1QTG5KI",
//     authDomain: "fir-vue-84a27.firebaseapp.com",
//     projectId: "fir-vue-84a27",
//     storageBucket: "fir-vue-84a27.appspot.com",
//     messagingSenderId: "1018116684499",
//     appId: "1:1018116684499:web:619e859b6b7b9cd863b226"

// };


// const db = firebase.initializeApp(config);
// const db = firebase.initializeApp(firebaseConfig);
// const db = getFirestore()
// export {db};

import { initializeApp } from "firebase/app"
// import { initializeApp } from 'firebase/app';
// import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBRZ7kkCYWtcXNQ_yTpTu-XNZ6V1QTG5KI",
    authDomain: "fir-vue-84a27.firebaseapp.com",
    databaseURL: "https://fir-vue-84a27-default-rtdb.firebaseio.com",
    projectId: "fir-vue-84a27",
    storageBucket: "fir-vue-84a27.appspot.com",
    messagingSenderId: "1018116684499",
    appId: "1:1018116684499:web:81d17d890f6ecca163b226"
  };
  
const db = initializeApp(firebaseConfig);

// const db = getDatabase(app)
// console.log(db);

export { db }