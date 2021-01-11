//ADD YOUR FIREBASE LINKS HERE'
var firebaseConfig = {
  apiKey: "AIzaSyA755KyDof_KjvV2ZdmLyulKJft9K5ZO4c",
  authDomain: "kwitter-84e3c.firebaseapp.com",
  databaseURL: "https://kwitter-84e3c-default-rtdb.firebaseio.com",
  projectId: "kwitter-84e3c",
  storageBucket: "kwitter-84e3c.appspot.com",
  messagingSenderId: "35780906811",
  appId: "1:35780906811:web:45053a2423d02b3d26311e",
  measurementId: "G-NDZ1NVRLWY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function onLoad() {
  document.getElementById("name").innerHTML = localStorage.getItem("username");
}

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        var row =
          "<div class='room_name' onClick='roomNameClick(this.id)' id=" +
          Room_names +
          ">#" +
          Room_names +
          ".</div>";
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}

function addRoom() {
  var roomName = document.getElementById("roomName").value;
  firebase.database().ref("/").child(roomName).update({
    purpose: "Adding room name",
  });
  localStorage.setItem("roomName", roomName);
}

function roomNameClick(roomName) {
  localStorage.setItem("roomName", roomName);
  window.location = "room_page.html";
}
getData();
