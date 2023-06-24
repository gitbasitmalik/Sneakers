import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
 const firebaseConfig = 
 {
    apiKey: "AIzaSyA6jnEY1EERS6k-mOSGwW8ghfl84dJFKXA",
    authDomain: "sneaker-store-bf016.firebaseapp.com",
    projectId: "sneaker-store-bf016",
    storageBucket: "sneaker-store-bf016.appspot.com",
    messagingSenderId: "920166168325",
    appId: "1:920166168325:web:7322860a97518f8edf296c",
    measurementId: "G-ZK2506GN1Y"
  };
  export const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export {db};  
  