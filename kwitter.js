var username;

function login() {
    username = document.getElementById("username_input").value;
    localStorage.setItem("username", username)
}