import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyC_Yx9OKBYF2NYwjw_Qo8gDrRTUMhGujDY",
  
    authDomain: "salary-calculator-2024.firebaseapp.com",
  
    projectId: "salary-calculator-2024",
  
    storageBucket: "salary-calculator-2024.appspot.com",
  
    messagingSenderId: "188107019451",
  
    appId: "1:188107019451:web:1dc5403deecf05af85459e",
  
    measurementId: "G-N7HG8FGN8X"
  
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
