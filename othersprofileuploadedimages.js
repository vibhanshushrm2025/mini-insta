function initialfunction() {
  let h = localStorage.getItem("username1");
  let a = h + "/profilephoto/1";
  let u = h + "/username";
  let n = h + "/name";

  firebase.storage().ref(a).getDownloadURL().then((url) => {
    imagg = document.getElementById("imag");
    imagg.src = url;
  })
  firebase.database().ref(u).on('value', (snapshot) => {
    document.getElementById("username").innerHTML = snapshot.val();
  })
  firebase.database().ref(n).on('value', (snapshot) => {
    document.getElementById("name").innerHTML = snapshot.val();
  })
  let usr = h + "/uploadedphotos";
  firebase.storage().ref().child(usr).listAll()
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        // console.log(folderRef)
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
          const imagg = document.createElement("img");
          const datediv = document.createElement("div");
          imagg.id = "hu";
          // document.getElementById("hu").appendChild(datediv);

          document.getElementById("helloo").appendChild(imagg);
          document.getElementById("helloo").appendChild(datediv);
          imagg.style = "height:400px;"
          imagg.src = url;
          datediv.style.height = "30px";


          console.log("download url: " + url);
        })
        // All the items under listRef.
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error);
    });
  let uk = localStorage.getItem("username");
  let u1 = localStorage.getItem("username1");
  let e = uk + "/friends/" + u1+"/followingstatus";
  firebase.database().ref(e).on('value',(snapshot)=>{
    let ui=snapshot.val();
    if(ui==u1){
      document.getElementById("followingstatus").innerHTML = "You are following this user";  
    }
    else{
      document.getElementById("followingstatus").innerHTML = "You arenot following this user";
    }
  })

  



}
function follow() {
  let u = localStorage.getItem("username");
  let u1 = localStorage.getItem("username1");
  let e = u + "/friends/" + u1+"/followingstatus";
  firebase.database().ref(e).set(u1);
  document.getElementById("followingstatus").innerHTML = "You are following this user";

}
function unfollow() {
  let u = localStorage.getItem("username");
  let u1 = localStorage.getItem("username1");
  let e = u + "/friends/" + u1+"/followingstatus";
  firebase.database().ref(e).remove();
  document.getElementById("followingstatus").innerHTML = "You arenot following this user";
}

