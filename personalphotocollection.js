// firebase.database().ref("user1/username").on("value", (snapshot) => {
//     document.getElementById("usrname").innerHTML = snapshot.val();
// });
// firebase.database().ref("user1/name").on("value", (snapshot) => {
//     document.getElementById("namee").innerHTML = snapshot.val();
// });

const username = localStorage.getItem("username")

const v = username + "/username";
const a = username + "/name";
firebase.database().ref(v).on("value", (snapshot) => {
  document.getElementById("usrname").innerHTML = snapshot.val();
});
firebase.database().ref(a).on("value", (snapshot) => {
  document.getElementById("namee").innerHTML = snapshot.val();
});

firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("login.html")
      
    } 
  })

