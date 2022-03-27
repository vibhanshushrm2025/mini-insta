firebase.database().ref("user1/username").on("value", (snapshot) => {
    document.getElementById("usrname").innerHTML = snapshot.val();
});
firebase.database().ref("user1/name").on("value", (snapshot) => {
    document.getElementById("namee").innerHTML = snapshot.val();
});


