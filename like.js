// slide show
function openNav() {
    document.getElementById("Sidenav").style.width = "450px";
}

function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
}

// slide audio

let likeAudio = document.querySelector(".LikeAudio");
let isPlayingLike = false;

likeAudio.addEventListener("click", DoLikeAudio);
function DoLikeAudio() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    li.className = 'HartAudio';
    li.onclick = PlayLikeAudio; 

    li.innerHTML += `<p> ${audioList[audioIndex].singer}:   
                         ${audioList[audioIndex].name}
                        <audio>
                             <source src=${audioList[audioIndex].audio} type="audio/mp3">
                        </audio>
                    </p>`
    ul.appendChild(li);
    document.querySelector(".store").appendChild(ul);
}

function PlayLikeAudio(e) {
    for (i = 0; i < 1; i++) {
        if (!isPlayingLike) {
            e.target.children[i].play();
            isPlayingLike = true;
            console.log(1)
        }
        else {
            e.target.children[i].pause();
            isPlayingLike = false;
        }
      
    }
}



