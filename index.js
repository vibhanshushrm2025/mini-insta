document.getElementById("signupform").addEventListener('submit', (Event) => {
  Event.preventDefault()
})

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    location.replace("welcome.html")
  }
});

  
  


function signup() {
  const nname=document.getElementById("name").value
  const username=document.getElementById("signupname").value
  const email = document.getElementById("signupemail").value
  const password = document.getElementById("signuppassword").value
  const confirmpassword = document.getElementById("signuppasswordconfirm").value
  
  if (password == confirmpassword) {
    firebase.database().ref("user1/username").set(username);   
    firebase.database().ref("user1/name").set(nname);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        
      })
      .catch((error) => {
        document.getElementById("error").innerHTML = error.message
      });
  }
  else{
    document.getElementById("error").innerHTML = "<b>Please recheck your password</b>"
  }

}
