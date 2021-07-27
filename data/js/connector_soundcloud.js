var widget1 = SC.Widget("buttonSoundCloundId");




try {
        var iframeSoundClound = document.createElement("iframe");
        iframeSoundClound.setAttribute("id", "buttonSoundCloundId");
        document.body.appendChild(iframeSoundClound);

    

    function soundPlay() {
        widget1.play()
        document.getElementById("soundId").setAttribute("onclick", "soundPause()");
        document.getElementById("iconPlayId").classList.remove("fa-play");
        document.getElementById("iconPlayId").classList.add("fa");
        document.getElementById("iconPlayId").classList.add("fa-pause");
    }

    function soundPause() {
        widget1.pause()
        document.getElementById("soundId").setAttribute("onclick", "soundPlay()");
        document.getElementById("iconPlayId").classList.remove("fa-pause");
        document.getElementById("iconPlayId").classList.add("fa");
        document.getElementById("iconPlayId").classList.add("fa-play");
    }


        iframeSoundClound.setAttribute("src", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1223696584&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false");
        iframeSoundClound.classList.add("soundHide");



}
catch (error) {
    console.log("Greska na fajlu: " + error.stack);
    console.log("Greska liniji broj: " + error.lineNumber);
    console.log("Greska: " + error.message);
}



