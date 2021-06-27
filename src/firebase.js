import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC0Oz72AIBRtE9rN6TkAUM5HCZJR0lRHx0",
    authDomain: "autenticacion-firebase-fe96f.firebaseapp.com",
    projectId: "autenticacion-firebase-fe96f",
    storageBucket: "autenticacion-firebase-fe96f.appspot.com",
    messagingSenderId: "890998803052",
    appId: "1:890998803052:web:8404b2dfc92f71c5032649",
    measurementId: "G-G878QPGNNG"
  };
  // Initialize Firebase
    app.initializeApp(firebaseConfig);
   
  //esto lo sacas de la pagina de firebase en la rosquita

  const db = app.firestore() 
  const auth = app.auth() // esta importa los metodos para la autenticacion

  export {db, auth} //para exportar este objeto