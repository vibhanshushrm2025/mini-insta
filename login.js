document.getElementById("loginform").addEventListener('submit', (Event) => {
  Event.preventDefault()
})
function logins() {
  const username = document.getElementById("signupname").value
  const email = document.getElementById("loginemail").value
  const password = document.getElementById("loginpassword").value
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((error) => {

      localStorage.setItem("username", username);
      let b = username + "/email";
      firebase.database().ref(b).on("value", (snapshot) => {
        console.log(snapshot.val())
        localStorage.setItem("email", snapshot.val());
        const u = localStorage.getItem("email");
        console.log(email);
        console.log(u);
        if (u == email) {
          let be = username + "/profilephoto/1";
          firebase.storage().ref(be).getDownloadURL().then((url) => {
            localStorage.setItem("profilephotourl", url);
          })
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              location.replace("welcome.html");
              // console.log("done");
            }
          });
        }
        else {
          document.getElementById("error").innerHTML = "username doesn't match with registered email"
        }
      })
    })
    .catch((error) => {
      document.getElementById("error").innerHTML = error.message;

    });

  document.getElementById("error").innerHTML = "Loading!!!";
}
function forgotpassword() {
  const email = document.getElementById("loginemail").value

  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      document.getElementById("error").innerHTML = "<b>Password reset email sent!<b>";

    })
    .catch((error) => {
      document.getElementById("error").innerHTML = error.message;

    });
}