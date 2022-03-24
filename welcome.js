firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("login.html")
      
    } 
  })

  function logout(){
    firebase.auth().signOut()
  }