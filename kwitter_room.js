function onLoad() {
  document.getElementById("name").innerHTML = localStorage.getItem("username");
}

var firebaseConfig = {
  apiKey: "AIzaSyBO0br380mt0HEkieZ2dnf8AUxpSi8zsAQ",
  authDomain: "let-s-chat-web-app-be380.firebaseapp.com",
  databaseURL: "https://let-s-chat-web-app-be380-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-web-app-be380",
  storageBucket: "let-s-chat-web-app-be380.appspot.com",
  messagingSenderId: "325978592290",
  appId: "1:325978592290:web:8c110d7c070256a19f267b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
