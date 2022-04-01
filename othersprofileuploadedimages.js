function initialfunction(){
    let h=localStorage.getItem("username1");
    let a = h + "/profilephoto/1";
    let u = h + "/username";
    let n = h + "/name";
    
       firebase.storage().ref(a).getDownloadURL().then((url)=>{
        imagg=document.getElementById("imag");
        imagg.src=url;
    })
    firebase.database().ref(u).on('value',(snapshot)=>{
        document.getElementById("username").innerHTML=snapshot.val();
    })
    firebase.database().ref(n).on('value',(snapshot)=>{
        document.getElementById("name").innerHTML=snapshot.val();
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
        let y =localStorage.getItem("followingstatus");
        document.getElementById("status").innerHTML=y;
    
}
function follow(){
    localStorage.setItem("followingstatus","You are following the user's feeds")
}
function unfollow(){
    localStorage.setItem("followingstatus","You arenot following the user's feeds")
}

