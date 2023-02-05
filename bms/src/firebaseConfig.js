import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAydC1e68bcEqWPfXHCCPiWIAEe2ycJwxM",
    authDomain: "barangay-management-syst-330ea.firebaseapp.com",
    projectId: "barangay-management-syst-330ea",
    storageBucket: "barangay-management-syst-330ea.appspot.com",
    messagingSenderId: "283264518807",
    appId: "1:283264518807:web:e2661a8a2bdaaaba9977d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)