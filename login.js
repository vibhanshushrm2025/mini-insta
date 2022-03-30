document.getElementById("loginform").addEventListener('submit', (Event) => {
  Event.preventDefault()
})
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    location.replace("welcome.html")
  }
});
function logins() {
  const username = document.getElementById("signupname").value
  const email = document.getElementById("loginemail").value
  const password = document.getElementById("loginpassword").value
  localStorage.setItem("username", username);
  let b = username + "/email";
  // const u=firebase.database().ref(b).val;
  firebase.database().ref(b).on("value", (snapshot) => {
    console.log(snapshot.val())
    localStorage.setItem("email", snapshot.val());
    
  })
  let be=username+"/profilephoto/1";
  firebase.storage().ref(be).getDownloadURL().then((url)=>{
    localStorage.setItem("profilephotourl",url);
  })
  document.getElementById("error").innerHTML = "Loading!!!";

  setTimeout(() => {
    const u = localStorage.getItem("email");
  console.log(email);
  console.log(u);
  if (u == email) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        document.getElementById("error").innerHTML = error.message;

      });
  }
  else {
    document.getElementById("error").innerHTML = "username doesn't match with registered email"
  }
  }, 2000);
  



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