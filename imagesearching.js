function fun() {
  let em = document.getElementById("imagehashtag").value;
  let a = "photos/" + em;
  firebase.database().ref(a).get().then((snapshot) => {
    if (snapshot.exists()) {
      document.getElementById("huihui").innerHTML = "";
      console.log("hai photo");
      let usr = "images/" + em;
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
              butt.id = r ;
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
    else {
      document.getElementById("huihui").innerHTML = "0 photos found with # " + em + " hashtag !!!!!";
    }
  })
}
document.getElementById("imagesearchform").addEventListener('submit', (Event) => {
  Event.preventDefault()
})