var firebaseConfig = {
    apiKey: "AIzaSyDtSn8DbsMmRQ6hd_R64p9HWCkV-GTC1JE",
    authDomain: "dustin--library.firebaseapp.com",
    databaseURL: "https://dustin--library.firebaseio.com",
    projectId: "dustin--library",
    storageBucket: "dustin--library.appspot.com",
    messagingSenderId: "990510482888",
    appId: "1:990510482888:web:ebbbbb9eb34166be78ecfd",
    measurementId: "G-EDRVL2L8BG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth()
  const database = firebase.firestore()
  const storage = firebase.storage()