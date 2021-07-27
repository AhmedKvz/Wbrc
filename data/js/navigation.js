var button1 = document.createElement("a");
var button2 = document.createElement("button");
var button3 = document.createElement("a");
var button4 = document.createElement("a");
var button5 = document.createElement("a");
var button6 = document.createElement("a");
var button7 = document.createElement("a");

var textButton1 = document.createTextNode("WBRC ARCHIVE");
var textButton2 = document.createTextNode("soundcloud/playlist");
var textButton3 = document.createTextNode("PROJECT");
var textButton4 = document.createTextNode("GALLERY");
var textButton5 = document.createTextNode("PRINT");
var textButton6 = document.createTextNode("MAPS");
var textButton7 = document.createTextNode("LINKS");

var iconPlay = document.createElement("i");



try {
    iconPlay.setAttribute("style", "padding-right: 6px;");
    iconPlay.setAttribute("id", "iconPlayId");
    iconPlay.classList.add("fa");
    iconPlay.classList.add("fa-play");
    button2.appendChild(iconPlay);

    button1.appendChild(textButton1);
    button2.appendChild(textButton2);
    button3.appendChild(textButton3);
    button4.appendChild(textButton4);
    button5.appendChild(textButton5);
    button6.appendChild(textButton6);
    button7.appendChild(textButton7);

    button1.setAttribute("id", "buttonIndexId");
    button2.setAttribute("id", "soundId");
    button2.classList.add("soundcloud");
    button2.setAttribute("onclick", "soundPlay()");



    button3.setAttribute("id", "buttonProjectId");
    button4.setAttribute("id", "buttonGalleryId");
    button5.setAttribute("id", "buttonPrintId");
    button6.setAttribute("id", "buttonMapsId");
    button7.setAttribute("id", "buttonLinksId");

    button1.setAttribute("href", "index.html");
    button2.setAttribute("style", "text-decoration: none;");
    button3.setAttribute("href", "project.html");
    button4.setAttribute("href", "gallery.html");
    button5.setAttribute("href", "print.html");
    button6.setAttribute("href", "maps.html");
    button7.setAttribute("href", "links.html");



    document.getElementById("navigationId").appendChild(button1);
    document.getElementById("navigationId").appendChild(button3);
    document.getElementById("navigationId").appendChild(button4);
    document.getElementById("navigationId").appendChild(button5);
    document.getElementById("navigationId").appendChild(button6);
    document.getElementById("navigationId").appendChild(button7);


    
    document.getElementById("navigationId").appendChild(button2);
}catch (error) {
    console.log("Greska na fajlu: " + error.stack);
    console.log("Greska liniji broj: " + error.lineNumber);
    console.log("Greska: " + error.message);
}