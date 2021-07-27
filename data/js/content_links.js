var liLink1 = document.createElement("li");
var liLink2 = document.createElement("li");
var liLink3 = document.createElement("li");
var liLink4 = document.createElement("li");
var liLink5 = document.createElement("li");



var divLink1 = document.createElement("a");
var divLink2 = document.createElement("a");
var divLink3 = document.createElement("a");
var divLink4 = document.createElement("a");
var divLink5 = document.createElement("a");

var textLink1 = document.createTextNode("www.irational.minipogon.org")
var textLink2 = document.createTextNode("www.inka.com.mk")
var textLink3 = document.createTextNode("www.tandemforculture.org")
var textLink4 = document.createTextNode("www.facebook.com/TandemforCulture")
var textLink5 = document.createTextNode("www.instagram.com/tandemforculture")





try {
    document.getElementById("buttonLinksId").setAttribute("style", "text-decoration: none;");
    document.getElementById("contentId").classList.remove("content-index");
    document.getElementById("contentId").classList.add("content-links");


    divLink1.classList.add("linkovi");
    divLink1.setAttribute("href", "https://www.irational.minipogon.org");
    divLink1.setAttribute("target", "_blank");
    divLink1.appendChild(textLink1);
    liLink1.appendChild(divLink1);
    document.getElementById("contentId").appendChild(liLink1);


    divLink2.classList.add("linkovi");
    divLink2.setAttribute("href", "https://www.inka.com.mk");
    divLink2.setAttribute("target", "_blank");
    divLink2.appendChild(textLink2);
    liLink2.appendChild(divLink2);
    document.getElementById("contentId").appendChild(liLink2);


    divLink3.classList.add("linkovi");
    divLink3.setAttribute("href", "https://www.tandemforculture.org");
    divLink3.setAttribute("target", "_blank");
    divLink3.appendChild(textLink3);
    liLink3.appendChild(divLink3);
    document.getElementById("contentId").appendChild(liLink3);

    divLink4.classList.add("linkovi");
    divLink4.setAttribute("href", "https://www.facebook.com/TandemforCulture");
    divLink4.setAttribute("target", "_blank");
    divLink4.appendChild(textLink4);
    liLink4.appendChild(divLink4);
    document.getElementById("contentId").appendChild(liLink4);

    divLink5.classList.add("linkovi");
    divLink5.setAttribute("href", "https://www.instagram.com/tandemforculture");
    divLink5.setAttribute("target", "_blank");
    divLink5.appendChild(textLink5);
    document.getElementById("contentId").appendChild(divLink5);


}
catch (error) {
    console.log("Greska na fajlu: " + error.stack);
    console.log("Greska liniji broj: " + error.lineNumber);
    console.log("Greska: " + error.message);
}