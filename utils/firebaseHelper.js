// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// export const getFirebaseApp = () => {

//     const firebaseConfig = {
//         apiKey: "AIzaSyCAMUk76Bo7Ya1s2gYG3QSIXLsYI4XR7eY",
//         authDomain: "whatsappclone-2761d.firebaseapp.com",
//         projectId: "whatsappclone-2761d",
//         storageBucket: "whatsappclone-2761d.appspot.com",
//         messagingSenderId: "658148303218",
//         appId: "1:658148303218:web:fe4ab015f92dd1c8b63deb"
//     };

//     const app = initializeApp(firebaseConfig);

//     // Initialize Firebase Auth with AsyncStorage
//     const auth = initializeAuth(app, {
//         persistence: getReactNativePersistence(AsyncStorage)
//     });

//     return { app, auth };
// }


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    const firebaseConfig = {
        apiKey: "AIzaSyCAMUk76Bo7Ya1s2gYG3QSIXLsYI4XR7eY",
        authDomain: "whatsappclone-2761d.firebaseapp.com",
        projectId: "whatsappclone-2761d",
        storageBucket: "whatsappclone-2761d.appspot.com",
        messagingSenderId: "658148303218",
        appId: "1:658148303218:web:fe4ab015f92dd1c8b63deb"
    };

    // Initialize Firebase
    return initializeApp(firebaseConfig);
}