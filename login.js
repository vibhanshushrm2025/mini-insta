document.getElementById("loginform").addEventListener('submit',(Event)=>{
    Event.preventDefault()
})
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
     location.replace("welcome.html")
    } 
  });
function logins(){
    const email=document.getElementById("loginemail").value
    const password=document.getElementById("loginpassword").value
    firebase.auth().signInWithEmailAndPassword(email, password)
  
  .catch((error) => {
      document.getElementById("error").innerHTML=error.message;
    
  });
}
function forgotpassword(){
  const email=document.getElementById("loginemail").value

  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    document.getElementById("error").innerHTML="<b>Password reset email sent!<b>";

  })
  .catch((error) => {
    document.getElementById("error").innerHTML=error.message;

  });
}