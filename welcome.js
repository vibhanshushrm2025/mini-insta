firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.replace("login.html")

  }
})

function logout() {
  firebase.auth().signOut()
}




firebase.storage().ref("username").listAll()
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
    });
    res.items.forEach((itemRef) => {
      // All the items under listRef.
      itemRef.getDownloadURL().then((url) => {
        console.log(url);
      })
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });

// unsplash.photos.getPhoto("pFqrYbhIAXs");

function homedefaultt() {
  // firebase.storage().ref("home").listAll()
  //   .then((res) => {
  //     res.prefixes.forEach((folderRef) => { });
  //     res.items.forEach((itemRef) => {
  //       itemRef.getDownloadURL().then((url) => {
  // const imagg = document.createElement("img");
  // const datediv = document.createElement("div");
  // imagg.id = "hu";
  // document.getElementById("imh").appendChild(imagg);
  // document.getElementById("imh").appendChild(datediv);
  // imagg.style = "height:400px;"
  // imagg.src = url;
  //         datediv.style.height = "30px";
  //         console.log("download url: " + url);
  //       })
  //     });
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  const imaggggggg = document.createElement("img");
  const datedivvvvvv = document.createElement("div");

  document.getElementById("imhhhhhh").appendChild(imaggggggg);
  document.getElementById("imhhhhhh").appendChild(datedivvvvvv);
  datedivvvvvv.style.height = "30px";
  imaggggggg.src = "https://source.unsplash.com/300x400/?boys";


  const imagggggggg = document.createElement("img");
  const datedivvvvvvv = document.createElement("div");

  document.getElementById("imhhhhhhh").appendChild(imagggggggg);
  document.getElementById("imhhhhhhh").appendChild(datedivvvvvvv);
  datedivvvvvvv.style.height = "30px";

  // imagg.style = "height:400px;"
  imagggggggg.src = "https://source.unsplash.com/500x400/?friends";

  const imaggggggggg = document.createElement("img");
  const datedivvvvvvvv = document.createElement("div");

  document.getElementById("imhhhhhhhh").appendChild(imaggggggggg);
  document.getElementById("imhhhhhhhh").appendChild(datedivvvvvvvv);
  datedivvvvvvvv.style.height = "30px";

  // imagg.style = "height:400px;"
  imaggggggggg.src = "https://source.unsplash.com/500x400/?fashion";

  const imagggggggggg = document.createElement("img");
  const datedivvvvvvvvv = document.createElement("div");

  document.getElementById("imhhhhhhhhh").appendChild(imagggggggggg);
  document.getElementById("imhhhhhhhhh").appendChild(datedivvvvvvvvv);
  datedivvvvvvvvv.style.height = "30px";

  // imagg.style = "height:400px;"
  imagggggggggg.src = "https://source.unsplash.com/500x400/?place";

  const imaggggggggggg = document.createElement("img");
  const datedivvvvvvvvvv = document.createElement("div");

  document.getElementById("imhhhhhhhhhh").appendChild(imaggggggggggg);
  document.getElementById("imhhhhhhhhhh").appendChild(datedivvvvvvvvvv);
  datedivvvvvvvvvv.style.height = "30px";

  // imagg.style = "height:400px;"
  imaggggggggggg.src = "https://source.unsplash.com/500x400/?selfie";

  const imagg = document.createElement("img");
  const datediv = document.createElement("div");
  imagg.id = "hu";
  document.getElementById("imh").appendChild(imagg);
  document.getElementById("imh").appendChild(datediv);
  datediv.style.height = "30px";
  // imagg.style = "height:400px;"
  imagg.src = "https://source.unsplash.com/400x400/?nature";

  const imaggg = document.createElement("img");
  const datedivv = document.createElement("div");
  imaggg.id = "hu";
  document.getElementById("imhh").appendChild(imaggg);
  document.getElementById("imhh").appendChild(datedivv);
  datedivv.style.height = "30px";

  // imagg.style = "height:400px;"
  imaggg.src = "https://source.unsplash.com/500x300/?nature,water";

  const imagggg = document.createElement("img");
  const datedivvv = document.createElement("div");

  document.getElementById("imhhh").appendChild(imagggg);
  document.getElementById("imhhh").appendChild(datedivvv);
  datedivvv.style.height = "30px";

  // imagg.style = "height:400px;"
  imagggg.src = "https://source.unsplash.com/300x400/?nature,forest";


  const imaggggg = document.createElement("img");
  const datedivvvv = document.createElement("div");

  document.getElementById("imhhhh").appendChild(imaggggg);
  document.getElementById("imhhhh").appendChild(datedivvvv);
  datedivvvv.style.height = "30px";

  // imagg.style = "height:400px;"
  imaggggg.src = "https://source.unsplash.com/500x400/?animal";


  const imagggggg = document.createElement("img");
  const datedivvvvv = document.createElement("div");

  document.getElementById("imhhhhh").appendChild(imagggggg);
  document.getElementById("imhhhhh").appendChild(datedivvvvv);
  datedivvvvv.style.height = "30px";

  // imagg.style = "height:400px;"
  imagggggg.src = "https://source.unsplash.com/500x400/?girls";
}

function usernamesearch() {
  let u = document.getElementById("searchbyusername").value;
  // console.log(u);
  let s = u + "/email";

  // firebase.database().ref(s).on('value', (snapshot)=>{
  //   console.log("yes username exists")
  // })

  firebase.database().ref(s).get().then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      
      localStorage.setItem("username1",u)
      location.replace("othersprofileuploadedimages.html")
    } else {
      document.getElementById("huihui").innerHTML="No such username exists!!!!!"
      // console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}



document.getElementById("usernameform").addEventListener('submit', (Event) => {
  Event.preventDefault()
})



