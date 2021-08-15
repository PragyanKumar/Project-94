
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDCl4N2-jmpsJdd944ImGYNCVYtObhkpV4",
    authDomain: "chatter-f4a1a.firebaseapp.com",
    databaseURL: "https://chatter-f4a1a-default-rtdb.firebaseio.com",
    projectId: "chatter-f4a1a",
    storageBucket: "chatter-f4a1a.appspot.com",
    messagingSenderId: "596572576546",
    appId: "1:596572576546:web:4f0cea99f4628dc8f6637b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // addUser function //
 function addUser(){
     userName=document.getElementById("user_name").value
     firebase.database().ref("/").child(userName).update({
         purpose : "adding user"
     })
 }