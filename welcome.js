firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.replace("login.html")

  }
})
function logout() {
  firebase.auth().signOut()
}
function homedefaultt() {
  console.log("main work started");
  let uy = localStorage.getItem("username");
  let hu = uy + "/friends";
  let i = 0;
  firebase.database().ref(hu).once('value', function (snapshot) {
    snapshot.forEach(
      function (ChildSnapshot) {
        console.log("2");
        let h = ChildSnapshot.val().followingstatus;
        console.log("3");
        let usr = h + "/uploadedphotos";
        firebase.storage().ref().child(usr).listAll()
          .then((res) => {
            res.prefixes.forEach((folderRef) => {
            });

            res.items.forEach((itemRef) => {
              itemRef.getDownloadURL().then((url) => {
                let r = itemRef.name;
                let o = "images/" + r + "/hashtag";
                const imagg = document.createElement("img");
                const likebutton = document.createElement("button");
                const dislikebutton = document.createElement("button");
                const br = document.createElement("br");
                const b = document.createElement("br");
                const d = document.createElement("br");
                const span = document.createElement("span");
                const spa = document.createElement("span");
                const san = document.createElement("span");
                const an = document.createElement("span");
                const a = document.createElement("span");
                const n = document.createElement("span");
                const sp = document.createElement("span");
                const p = document.createElement("span");
                const s = document.createElement("span");
                const datediv = document.createElement("div");
                const di = document.createElement("input");
                const tu = document.createElement("button");
                const tur = document.createElement("span");
                const turr = document.createElement("div");

                imagg.id = "hu";
                document.getElementById("helloo").appendChild(imagg);
                document.getElementById("helloo").appendChild(br);
                document.getElementById("helloo").appendChild(b);
                document.getElementById("helloo").appendChild(spa);
                document.getElementById("helloo").appendChild(san);
                document.getElementById("helloo").appendChild(a);
                document.getElementById("helloo").appendChild(an);
                document.getElementById("helloo").appendChild(likebutton);
                document.getElementById("helloo").appendChild(span);
                document.getElementById("helloo").appendChild(sp);
                document.getElementById("helloo").appendChild(n);
                document.getElementById("helloo").appendChild(dislikebutton);
                document.getElementById("helloo").appendChild(s);
                document.getElementById("helloo").appendChild(p);
                document.getElementById("helloo").appendChild(d);
                document.getElementById("helloo").appendChild(di);
                document.getElementById("helloo").appendChild(tur);
                document.getElementById("helloo").appendChild(tu);
                document.getElementById("helloo").appendChild(turr);
                document.getElementById("helloo").appendChild(datediv);


                di.setAttribute('type', 'text');
                di.setAttribute('placeholder', 'Enter username to share');
                di.style = "margin-top:10px";
                di.id = r + 's';


                tu.setAttribute("class", "btn btn-info");
                tu.innerHTML = "Share";
                tu.id = r;
                tu.addEventListener('click', share);

                imagg.style = "height:400px;border-radius: 5px; border: 5px solid rgb(185, 28, 111);"
                imagg.src = url;
                datediv.style.height = "30px";


                likebutton.id = r;
                likebutton.setAttribute("type", "button");
                likebutton.setAttribute("class", "btn btn-warning");
                likebutton.addEventListener('click', likeadd);
                uo = localStorage.getItem("username");
                firebase.database().ref("supportingstatus/" + r + "/users").child(uo).get().then((snapshot) => {
                  if ((snapshot.exists()) && (snapshot.val() == 'l')) {
                    let elem = document.getElementById(r);
                    likebutton.style = "background-color:red";
                    likebutton.innerHTML = "Liked";
                  }
                  else {
                    likebutton.innerHTML = "Like Post";
                  }

                })


                dislikebutton.id = r + 'darpokdarpok';
                let opp = r + 'darpokdarpok';
                dislikebutton.setAttribute("type", "button");
                dislikebutton.setAttribute("class", "btn btn-warning");
                dislikebutton.addEventListener('click', dislikeadd);
                dislikebutton.innerHTML = "Dislike Post";
                uo = localStorage.getItem("username");
                firebase.database().ref("supportingstatus/" + r + "/users").child(uo).get().then((snapshot) => {
                  if ((snapshot.exists()) && (snapshot.val() == 'd')) {
                    dislikebutton.style = "background-color:red";
                    dislikebutton.innerHTML = "Disliked";
                  }
                  else {
                    dislikebutton.innerHTML = "Dislike Post";
                  }

                })


                span.innerHTML = "&nbsp;&nbsp;&nbsp;";
                san.innerHTML = "&nbsp;&nbsp;&nbsp;";
                an.innerHTML = "&nbsp;&nbsp;&nbsp;";
                n.innerHTML = "&nbsp;&nbsp;&nbsp;";
                s.innerHTML = "&nbsp;&nbsp;&nbsp;Uploaded by : ";
                tur.innerHTML = "&nbsp;&nbsp;&nbsp;";
                turr.id = r + "e";

                firebase.database().ref("images/" + r + "/likes").on('value', (snapshot) => {
                  a.innerHTML = snapshot.val() + " Likes";
                  a.style = "font-size:18px;"
                })
                firebase.database().ref("images/" + r + "/username").on('value', (snapshot) => {
                  p.innerHTML = "#" + snapshot.val();
                  p.style = "font-size:35px;color:blue;"
                })

                firebase.database().ref("images/" + r + "/dislikes").on('value', (snapshot) => {
                  sp.innerHTML = snapshot.val() + " Dislikes";
                  sp.style = "font-size:18px;"
                })
                firebase.database().ref(o).on('value', (snapshot) => {
                  spa.innerHTML = "#" + snapshot.val();
                  spa.style = "font-size:30px;color:blue;";
                })


              })


            });
          }).catch((error) => {
            console.log(error);
          });

      }


    )
  })

  const datedivvvvvv = document.createElement("div");
  imagggggggf = document.getElementById("imaggggggg");
  document.getElementById("imhhhhhh").appendChild(datedivvvvvv);
  datedivvvvvv.style.height = "30px";
  imagggggggf.src = "https://source.unsplash.com/300x400/?boys";



  const imagggggggg = document.getElementById("imagggggggg");
  const datedivvvvvvv = document.createElement("div");

  document.getElementById("imhhhhhhh").appendChild(imagggggggg);
  document.getElementById("imhhhhhhh").appendChild(datedivvvvvvv);
  datedivvvvvvv.style.height = "30px";

  imagggggggg.src = "https://source.unsplash.com/500x400/?friends";

  const imaggggggggg = document.getElementById("imaggggggggg")
  const datedivvvvvvvv = document.createElement("div");

  document.getElementById("imhhhhhhhh").appendChild(imaggggggggg);
  document.getElementById("imhhhhhhhh").appendChild(datedivvvvvvvv);
  datedivvvvvvvv.style.height = "30px";

  imaggggggggg.src = "https://source.unsplash.com/500x400/?fashion";

  const imagggggggggg = document.getElementById("imagggggggggg")
  const datedivvvvvvvvv = document.createElement("div");

  document.getElementById("imhhhhhhhhh").appendChild(imagggggggggg);
  document.getElementById("imhhhhhhhhh").appendChild(datedivvvvvvvvv);
  datedivvvvvvvvv.style.height = "30px";

  imagggggggggg.src = "https://source.unsplash.com/500x400/?place";

  const imaggggggggggg = document.getElementById("imaggggggggggg")
  const datedivvvvvvvvvv = document.createElement("div");

  document.getElementById("imhhhhhhhhhh").appendChild(imaggggggggggg);
  document.getElementById("imhhhhhhhhhh").appendChild(datedivvvvvvvvvv);
  datedivvvvvvvvvv.style.height = "30px";

  imaggggggggggg.src = "https://source.unsplash.com/500x400/?selfie";

  const datediv = document.createElement("div");
  imagg = document.getElementById("imagg");
  document.getElementById("imh").appendChild(datediv);
  datediv.style.height = "30px";
  imagg.src = "https://source.unsplash.com/400x400/?nature";

  const imaggg = document.getElementById("imaggg");
  const datedivv = document.createElement("div");
  imaggg.id = "hu";
  document.getElementById("imhh").appendChild(imaggg);
  document.getElementById("imhh").appendChild(datedivv);
  datedivv.style = "height:30px;";

  imaggg.src = "https://source.unsplash.com/500x300/?nature,water";

  const imagggg = document.getElementById("imagggg");
  const datedivvv = document.createElement("div");

  document.getElementById("imhhh").appendChild(imagggg);
  document.getElementById("imhhh").appendChild(datedivvv);
  datedivvv.style.height = "30px";


  imagggg.src = "https://source.unsplash.com/300x400/?nature,forest";


  const imaggggg = document.getElementById("imaggggg");
  const datedivvvv = document.createElement("div");

  document.getElementById("imhhhh").appendChild(imaggggg);
  document.getElementById("imhhhh").appendChild(datedivvvv);
  datedivvvv.style.height = "30px";

  imaggggg.src = "https://source.unsplash.com/500x400/?animal";


  const imagggggg = document.getElementById("imagggggg");
  const datedivvvvv = document.createElement("div");

  document.getElementById("imhhhhh").appendChild(imagggggg);
  document.getElementById("imhhhhh").appendChild(datedivvvvv);
  datedivvvvv.style.height = "30px";

  imagggggg.src = "https://source.unsplash.com/500x400/?girls";

}
function share(event) {
  let uix = localStorage.getItem("username");
  let b = event.target.id;
  let i = b + 's';
  let ww = b + 'e';
  let w = document.getElementById(i).value;
  let tr = w + "/username";
  firebase.database().ref(tr).get().then((snapshot) => {
    if (snapshot.exists()) {
      let yo = "sharedwith/" + w + "/faltu/" + b;
      firebase.database().ref(yo).set(uix);

      let uo = w + "/sharedwithme";
      let we = "images/" + b + "/username";
      firebase.database().ref(we).on('value', (snapshot) => {
        let uploadedby = snapshot.val();
        let qw = uploadedby + "/uploadedphotos/" + b;
        firebase.storage().ref(qw).getDownloadURL().then(url => {
          console.log(url);
          let file = url;
          firebase.storage().ref(uo).child(b).put(file).then(() => {
        }).catch(() => {
        })
        })
        
        document.getElementById(ww).innerHTML = "<center>Shared succesfully !!!!!!</center>";
        document.getElementById(ww).style = "color:white;";
      })
      


    } else {
      document.getElementById(ww).innerHTML = "<center>No such username exists !!!!</center>";
      document.getElementById(ww).style = "color:white;";
    }
  }).catch((error) => {
    console.error(error);
  });



}
function likeadd(event) {
  u = event.target.id;

  let uo = localStorage.getItem("username");
  firebase.database().ref("supportingstatus/" + u + "/users").child(uo).get().then((snapshot) => {
    if ((snapshot.exists()) && (snapshot.val() == 'l')) {
      firebase.database().ref("supportingstatus/" + u + "/users/" + uo).remove();
      let lelem = document.getElementById(u);
      lelem.innerHTML = "Like post";
      lelem.style = "background-color:yellow";
      firebase.database().ref('images/' + u + '/likes').on('value', (snapshot) => {
        let i = snapshot.val();
        i--;
        localStorage.setItem('likes', i);
      })
      let ep = localStorage.getItem('likes');
      firebase.database().ref('images/' + u).update({
        likes: ep
      })
    }
    else if ((snapshot.exists()) && (snapshot.val() == 'd')) {
      let elem = document.getElementById(u);
      elem.innerHTML = "Liked";
      elem.style = "background-color:red";
      firebase.database().ref('images/' + u + '/likes').on('value', (snapshot) => {
        let i = snapshot.val();
        i++;
        localStorage.setItem('likes', i)
      })
      let p = localStorage.getItem('likes');
      firebase.database().ref('images/' + u).update({
        likes: p
      })
      firebase.database().ref("supportingstatus/" + u + "/users/" + uo).set('l');
      let opp = u + 'darpokdarpok';
      let delem = document.getElementById(opp);
      delem.innerHTML = "Dislike post";
      delem.style = "background-color:yellow";
      firebase.database().ref('images/' + u + '/dislikes').on('value', (snapshot) => {
        let i = snapshot.val();
        i--;
        localStorage.setItem('dislikes', i);
      })
      let wep = localStorage.getItem('dislikes');
      firebase.database().ref('images/' + u).update({
        dislikes: wep
      })
    }
    else {
      let elem = document.getElementById(u);
      elem.innerHTML = "Liked";
      elem.style = "background-color:red";
      firebase.database().ref('images/' + u + '/likes').on('value', (snapshot) => {
        let i = snapshot.val();
        i++;
        localStorage.setItem('likes', i)
      })
      let p = localStorage.getItem('likes');
      firebase.database().ref('images/' + u).update({
        likes: p
      })
      firebase.database().ref("supportingstatus/" + u + "/users/" + uo).set('l');
    }

  })


}
function dislikeadd(event) {
  let yt = event.target.id;
  u = yt.replace('darpokdarpok', '');


  let uo = localStorage.getItem("username");
  firebase.database().ref("supportingstatus/" + u + "/users").child(uo).get().then((snapshot) => {

    if ((snapshot.exists()) && (snapshot.val() == 'd')) {
      firebase.database().ref("supportingstatus/" + u + "/users/" + uo).remove();
      let opp = u + 'darpokdarpok';
      let delem = document.getElementById(opp);
      delem.innerHTML = "Dislike post";
      delem.style = "background-color:yellow";
      firebase.database().ref('images/' + u + '/dislikes').on('value', (snapshot) => {
        let i = snapshot.val();
        i--;
        localStorage.setItem('dislikes', i);
      })
      let wep = localStorage.getItem('dislikes');
      firebase.database().ref('images/' + u).update({
        dislikes: wep
      })
    }
    else if ((snapshot.exists()) && (snapshot.val() == 'l')) {
      let elem = document.getElementById(yt);
      elem.innerHTML = "Disiked";
      elem.style = "background-color:red";
      firebase.database().ref('images/' + u + '/dislikes').on('value', (snapshot) => {
        let i = snapshot.val();
        i++;
        localStorage.setItem('dislikes', i);
      })
      let p = localStorage.getItem('dislikes');
      firebase.database().ref('images/' + u).update({
        dislikes: p
      })
      firebase.database().ref("supportingstatus/" + u + "/users/" + uo).set('d');
      let lelem = document.getElementById(u);
      lelem.innerHTML = "Like post";
      lelem.style = "background-color:yellow";
      firebase.database().ref('images/' + u + '/likes').on('value', (snapshot) => {
        let i = snapshot.val();
        i--;
        localStorage.setItem('likes', i);
      })
      let ep = localStorage.getItem('likes');
      firebase.database().ref('images/' + u).update({
        likes: ep
      })
    }
    else {
      let elem = document.getElementById(yt);
      elem.innerHTML = "Disiked";
      elem.style = "background-color:red";
      firebase.database().ref('images/' + u + '/dislikes').on('value', (snapshot) => {
        let i = snapshot.val();
        i++;
        localStorage.setItem('dislikes', i);
      })
      let p = localStorage.getItem('dislikes');
      firebase.database().ref('images/' + u).update({
        dislikes: p
      })
      firebase.database().ref("supportingstatus/" + u + "/users/" + uo).set('d');
    }

  })

}
function usernamesearch() {
  let u = document.getElementById("searchbyusername").value;
  let s = u + "/email";
  firebase.database().ref(s).get().then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());

      localStorage.setItem("username1", u)
      location.replace("othersprofileuploadedimages.html")
    } else {
      document.getElementById("huihui").innerHTML = "No such username exists!!!!!"
    }
  }).catch((error) => {
    console.error(error);
  });


}
document.getElementById("usernameform").addEventListener('submit', (Event) => {
  Event.preventDefault()
})



