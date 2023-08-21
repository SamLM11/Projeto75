import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyACVNcX4nc4XAFDgnSQ7T395IRUdGGAzcM",
  authDomain: "aluguel-bicicleta-virtual.firebaseapp.com",
  projectId: "aluguel-bicicleta-virtual",
  storageBucket: "aluguel-bicicleta-virtual.appspot.com",
  messagingSenderId: "935995660188",
  appId: "1:935995660188:web:fddd032158fc04e6f35a59"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
