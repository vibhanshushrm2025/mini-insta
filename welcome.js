firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("login.html")
      
    } 
  })

  function logout(){
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
      itemRef.getDownloadURL().then((url)=>{
          console.log(url);
      })
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });

  