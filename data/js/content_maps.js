var divMapsCardImg1 = document.createElement("DIV");
var divMapsCardImg2 = document.createElement("DIV");
var divMapsCardImg3 = document.createElement("DIV");
var divMapsCardImg4 = document.createElement("DIV");

var aMapsCardImg1 = document.createElement("a");
var aMapsCardImg2 = document.createElement("a");
var aMapsCardImg3 = document.createElement("a");
var aMapsCardImg4 = document.createElement("a");

var mapsCardImg1 = document.createElement("img");
var mapsCardImg2 = document.createElement("img");
var mapsCardImg3 = document.createElement("img");
var mapsCardImg4 = document.createElement("img");


try {
    document.getElementById("buttonMapsId").setAttribute("style", "text-decoration: none;");
    document.getElementById("contentId").classList.remove("content-index");
    document.getElementById("contentId").classList.add("content-maps");



    //#region CARD IMAGE 1
    divMapsCardImg1.classList.add("image-1");
    aMapsCardImg1.setAttribute("href", "data/img/map_01.png")
    aMapsCardImg1.setAttribute("target", "_blank")
    mapsCardImg1.setAttribute("src", "data/img/map_01.png");
    aMapsCardImg1.appendChild(mapsCardImg1);
    divMapsCardImg1.appendChild(aMapsCardImg1);
    //#endregion

    //#region CARD IMAGE 2
    divMapsCardImg2.classList.add("image-2");
    aMapsCardImg2.setAttribute("href", "data/img/map_02.png")
    aMapsCardImg2.setAttribute("target", "_blank")
    mapsCardImg2.setAttribute("src", "data/img/map_02.png");
    aMapsCardImg2.appendChild(mapsCardImg2);
    divMapsCardImg2.appendChild(aMapsCardImg2);
    //#endregion

    //#region CARD IMAGE 3
    divMapsCardImg3.classList.add("image-3");
    aMapsCardImg3.setAttribute("href", "data/img/map_03.png")
    aMapsCardImg3.setAttribute("target", "_blank")
    mapsCardImg3.setAttribute("src", "data/img/map_03.png");
    aMapsCardImg3.appendChild(mapsCardImg3);
    divMapsCardImg3.appendChild(aMapsCardImg3);
    //#endregion

    //#region CARD IMAGE 4
    divMapsCardImg4.classList.add("image-4");
    aMapsCardImg4.setAttribute("href", "data/img/map_04.png")
    aMapsCardImg4.setAttribute("target", "_blank")
    mapsCardImg4.setAttribute("src", "data/img/map_04.png");
    aMapsCardImg4.appendChild(mapsCardImg4);
    divMapsCardImg4.appendChild(aMapsCardImg4);
    //#endregion


    document.getElementById("contentId").appendChild(divMapsCardImg1);
    document.getElementById("contentId").appendChild(divMapsCardImg2);
    document.getElementById("contentId").appendChild(divMapsCardImg3);
    document.getElementById("contentId").appendChild(divMapsCardImg4);


}
catch (error) {
    console.log("Greska na fajlu: " + error.stack);
    console.log("Greska liniji broj: " + error.lineNumber);
    console.log("Greska: " + error.message);
}