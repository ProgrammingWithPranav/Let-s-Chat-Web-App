var roomName;
var userName;

roomName = localStorage.getItem("roomName");
userName = localStorage.getItem("username");

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

function send() {
  var msg = document.getElementById("messageInput").value;
  firebase
    .database()
    .ref("/" + roomName)
    .push({
      name: userName,
      msg: msg,
      likes: 0,
      dislikes: 0,
    });
  document.getElementById("messageInput").value = "";
}

function get() {
  firebase
    .database()
    .ref("/" + roomName)
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          msg_id = childKey;
          msg_data = childData;
          username = msg_data["name"];
          msg = msg_data["msg"];
          likes = msg_data["likes"];
          dislikes = msg_data["dislikes"];

          var row =
            "<h4>" +
            username +
            "<img src='tick.png' class='user_tick' /></h4>" +
            "<h4 class='message_h4'>" +
            msg +
            "</h4>" +
            "<button onclick='updateLike(this.id)' id="+msg_id+" value="+likes+" class='btn btn-warning'> <span class='glyphicon glyphicon-thumbs-up'> " +
            likes +
            " Likes</button>" +
            "<button onclick='updatedisLike(this.id)' id="+msg_id+" value="+dislikes+" class='btn btn-danger'> <span class='glyphicon glyphicon-thumbs-down'> " +
            dislikes +
            " Dislikes</button>";
          document.getElementById("output").innerHTML += row;
        }
      });
    });
}

function updateLike(id) {

  like = document.getElementById(id).value;
  like++;
  firebase.database().ref(roomName).child(id).update({
    likes: like,
  });
}

function updatedisLike(id) {

    dislike = document.getElementById(id).value;
    dislike++;
    firebase.database().ref(roomName).child(id).update({
      dislikes: dislike,
    });
  }

get();
