document.getElementById("signupform").addEventListener('submit', (Event) => {
  Event.preventDefault()
})
function auth() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      location.replace("welcome.html")
    }
  });
}
function signup() {
  document.getElementById("error").innerHTML = "Loading !!";
  const nname = document.getElementById("name").value
  const username = document.getElementById("signupname").value
  const email = document.getElementById("signupemail").value
  const password = document.getElementById("signuppassword").value
  const confirmpassword = document.getElementById("signuppasswordconfirm").value

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential);
      if (password == confirmpassword) {
        const v = username + "/username";
        const a = username + "/name";
        const e = username + "/email";
        firebase.database().ref(v).set(username);
        firebase.database().ref(a).set(nname);
        firebase.database().ref(e).set(email);
        localStorage.setItem("username", username);
        setInterval(() => {
          var i = 0;
          firebase.database().ref(v).on('value', (snapshot) => {
            if (snapshot.exists()) {
              i++;
            }
            
          });
          let em = localStorage.getItem("username");
          if(em!=null){
            i++;
          }
          firebase.database().ref(a).on('value', (snapshot) => {
            if (snapshot.exists()) {
              i++;
            }
          });;
          firebase.database().ref(e).on('value', (snapshot) => {
            if (snapshot.exists()) {
              i++;
            }
          });
          if (i == 4) {
            auth();
          }
        }, 2000);


      }
      else {
        document.getElementById("error").innerHTML = "<b>Please recheck your password</b>"
      }

    })
    .catch((error) => {
      document.getElementById("error").innerHTML = error.message
    });
}


