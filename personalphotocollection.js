const username = localStorage.getItem("username")
const v = username + "/username";
const aa = username + "/name";
firebase.database().ref(v).on("value", (snapshot) => {
  document.getElementById("usrname").innerHTML = snapshot.val();
});
firebase.database().ref(aa).on("value", (snapshot) => {
  document.getElementById("namee").innerHTML = snapshot.val();
});
firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    location.replace("login.html")

  }
})
function storagee() {
  document.getElementById("spann").innerHTML = "Wait till the image previews before uploading"
  let file = document.getElementById("uploadfile").files[0]
  firebase.storage().ref("uploadedphotos").child(file.name).put(file).then(() => {
    let usr = "uploadedphotos/" + file.name;
    firebase.storage().ref(usr).getDownloadURL().then(url => {
      const image = document.getElementById('image');
      image.src = url
    }).catch(e => {
      console.log(e)
    })
  }).catch(e => {
    console.log(e)
  })

}
function deleteimage() {
  let file = document.getElementById("uploadfile").files[0]
  let fn = file.name;
  let h = localStorage.getItem("username");
  let usr = h + "/uploadedphotos/" + fn;

  firebase.storage().ref(usr).delete().then(() => {
    console.log("deleted successfully")
    const image = document.getElementById('image');
    image.src = "images/uploadimage.jpg"

  })
}
function onloadd() {
  window.scrollTo(0,0);
  let h = localStorage.getItem("username");
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
          const di = document.createElement("input");
          const tu = document.createElement("button");
          const tur = document.createElement("span");
          const turr = document.createElement("div");
          const d = document.createElement("br");

          const but = document.createElement('div');
          but.style = "margin-top:7px";
          but.setAttribute('class', "d-grid gap-2 col-6 mx-auto");
          but.id = r;
          yuii = r;

          const butt = document.createElement('button');
          butt.setAttribute('class', "btn btn-primary");
          butt.setAttribute('type', "button");
          let ghb = localStorage.getItem("username");
          let qq = ghb + "/savedimages/" + r + "/id";
          firebase.database().ref(qq).on('value', (snapshot) => {
            if (snapshot.exists()) {
              butt.innerHTML = "This image is saved to your's saved folder . Click to save again";
            }
            else {
              butt.innerHTML = "Save this image";
            }
          })
          butt.id = r;
          butt.addEventListener('click', save);

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
          document.getElementById("helloo").appendChild(but);
          document.getElementById(yuii).appendChild(butt);
          document.getElementById("helloo").appendChild(turr);
          document.getElementById("helloo").appendChild(datediv);
          imagg.style = "height:400px;border-radius: 5px; border: 5px solid rgb(185, 28, 111);"
          imagg.src = url;
          datediv.style.height = "30px";

          tu.setAttribute("class", "btn btn-info");
          tu.innerHTML = "Share";
          tu.id = r;
          tu.addEventListener('click', share);


          likebutton.id = r;
          likebutton.setAttribute("type", "button");
          likebutton.setAttribute("class", "btn btn-warning");
          likebutton.addEventListener('click', likeadd);
          uo = localStorage.getItem("username");
          firebase.database().ref("supportingstatus/" + r + "/users").child(uo).get().then((snapshot) => {
            if ((snapshot.exists()) && (snapshot.val() == 'l')) {
              let elem = document.getElementById(r);
              likebutton.style = "background-color:green";
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
          di.setAttribute('type', 'text');
          di.setAttribute('placeholder', 'Enter username to share');
          di.style = "margin-top:10px";
          di.id = r + 's';

          tur.innerHTML = "&nbsp;&nbsp;&nbsp;";
          turr.id = r + "e";


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


        })


      });
    }).catch((error) => {
      console.log(error);
    });
  let g = localStorage.getItem("username");
  let u = g + "/profilephoto/1";
  firebase.storage().ref(u).getDownloadURL().then((url) => {
    let imag = document.getElementById("hug");
    imag.src = url;

  })



}
function ghjk() {
  document.getElementById("spann").innerHTML="Loading ....";
  const e = localStorage.getItem("username");
  let gh = firebase.database().ref("waste").push().key;
  let u = document.getElementById("hashtag").value;
  let a = "photos/" + u;
  firebase.database().ref(a).set("1");
  console.log(gh);
  let file = document.getElementById("uploadfile").files[0]
  const v = e + "/uploadedphotos"

  firebase.storage().ref(v).child(gh).put(file).then(() => {
  }).catch(e => {
    console.log(e)
  })

  firebase.database().ref("images/" + gh).set({
    hashtag: u,
    likes: "0",
    dislikes: "0",
    username: e
  }).then(() => {
    firebase.storage().ref("/images/" + u).child(gh).put(file).then((snapshot) => {
      location.reload();
    })
    console.log("done");
  })
}
function updatedphoto() {
  const preload = document.querySelector('.preload');
  preload.classList.remove('preload-finish');

  let file = document.getElementById("profileimage").files[0];
  let s = file.name;
  e = localStorage.getItem("username");
  let n = e + "/profilephoto";
  firebase.storage().ref(n).child("1").put(file).then(() => {
    let m = e + "/profilephoto/1";
    firebase.storage().ref(m).getDownloadURL().then((url) => {
      let imag = document.getElementById("hug");
      imag.src = url;
      localStorage.setItem("profilephotourl", url);
      preload.classList.add('preload-finish');

    })
  })
}
function logout() {
  firebase.auth().signOut()
}
setTimeout(() => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-finish');
}, 2000);


