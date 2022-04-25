function share(event) {
    let uix = localStorage.getItem("username");
    let b = event.target.id;
    let i = b + 's';
    let ww = b + 'e';
    let w = document.getElementById(i).value;
    let tr = w + "/username";
    
    firebase.database().ref(tr).get().then((snapshot) => {
        if ((snapshot.exists())&&(w!=uix)) {
            let yo = "sharedwith/" + w + "/faltu/" + b;

            firebase.database().ref(yo).update({
                "sharedby":uix
            });
            firebase.database().ref(yo).update({
                "id": b
            });
            let we = "images/" + b + "/username";
            firebase.database().ref(we).on('value', (snapshot) => {
                let uploadedby = snapshot.val();
                firebase.database().ref(yo).update({
                    "uploadedby": uploadedby
                });
            })
            document.getElementById(ww).innerHTML = "<center>Shared succesfully !!!!!!</center>";
            document.getElementById(ww).style = "color:green;";
        } 
        else if((snapshot.exists())&&(w==uix)){
            document.getElementById(ww).innerHTML = "<center>You can't share this with yourself . Save this post if you want to keep this post with yourself !!!!</center>";
            document.getElementById(ww).style = "color:green;";
        }
        else {
            document.getElementById(ww).innerHTML = "<center>No such username exists !!!!</center>";
            document.getElementById(ww).style = "color:green;";
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
            elem.style = "background-color:green";
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
            elem.style = "background-color:green";
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
function save(event) {
    let i = event.target.id;
    let ii = localStorage.getItem("username");
    let ty = ii + "/savedimages/" + i;
    firebase.database().ref(ty).set({
        "id": i,
    })
    let ww = i + "e";
    let ui = document.getElementById(ww);
    ui.innerHTML = "<center>Saved successfully to saved posts !!!!!!</center>";
    document.getElementById(ww).style = "color:green;";

}