function initialfunction() {
  let h = localStorage.getItem("username1");
  let hi = localStorage.getItem("username");
  let r = hi + "/friends/" + h + "/followingstatus";
  let w = h + "/followingstatus";
  firebase.database().ref(r).on('value', (snapshot) => {

    if (snapshot.val() == h) {
      let elem = document.getElementById("followingstatus");
      elem.innerHTML = "You are following the user";
    }
    else{
      let elem = document.getElementById("followingstatus");
      elem.innerHTML = "You arenot following the user";
    }
    
  })

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
          document.getElementById("helloo").appendChild(datediv);
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


        });
      });
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
function follow() {
  let u = localStorage.getItem("username");
  let u1 = localStorage.getItem("username1");
  let e = u + "/friends/" + u1 + "/followingstatus";
  firebase.database().ref(e).set(u1);
  document.getElementById("followingstatus").innerHTML = "You are following this user";

}
function unfollow() {
  let u = localStorage.getItem("username");
  let u1 = localStorage.getItem("username1");
  let e = u + "/friends/" + u1 + "/followingstatus";
  firebase.database().ref(e).remove();
  document.getElementById("followingstatus").innerHTML = "You arenot following this user";
}

