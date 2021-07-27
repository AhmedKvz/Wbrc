
var containerFluid = document.createElement("DIV");
var navToggler = document.createElement("button");
var navSpan = document.createElement("span");
var divNavCollapse = document.createElement("DIV");

var ulNavBar = document.createElement("ul");

var aNavItem = document.createElement("li");
var navItem1 = document.createElement("li");
var navItem2 = document.createElement("li");
var navItem3 = document.createElement("li");
var navItem4 = document.createElement("li");
var navItem5 = document.createElement("li");
var navItem6 = document.createElement("li");


var liNavItem = document.createElement("a");
var liNavProject = document.createElement("a");
var liNavGallery = document.createElement("a");
var liNavPrint = document.createElement("a");
var liNavMaps = document.createElement("a");
var liNavLink = document.createElement("a");
var button2 = document.createElement("button");

var wbrc = document.createTextNode("WBRC ARCHIVE");
var project = document.createTextNode("PROJECT");
var gallery = document.createTextNode("GALLERY");
var printt = document.createTextNode("PRINT");
var maps = document.createTextNode("MAPS");
var link = document.createTextNode("LINKS");
var textButton2 = document.createTextNode("soundcloud/playlist");
var iconPlay = document.createElement("i");





try {
    
    containerFluid.classList.add("container-fluid");

    navToggler.classList.add("navbar-toggler");
    navToggler.setAttribute("type", "button");
    navToggler.setAttribute("data-bs-toggle", "collapse");
    navToggler.setAttribute("data-bs-target", "#navbarNav");
    navToggler.setAttribute("aria-controls", "navbarNav");
    navToggler.setAttribute("aria-expanded", "false");
    navToggler.setAttribute("aria-label", "Toggle navigation");
    navSpan.classList.add("navbar-toggler-icon");
    navToggler.appendChild(navSpan);
    containerFluid.appendChild(navToggler);
    //#endregion

    //#region WBRC
    ulNavBar.classList.add("navbar-nav");
    containerFluid.appendChild(ulNavBar);

    liNavItem.classList.add("nav-link");
    aNavItem.appendChild(liNavItem);
    aNavItem.classList.add("nav-item");
    ulNavBar.appendChild(aNavItem);
    
    liNavItem.appendChild(wbrc);
    liNavItem.setAttribute("href", "index.html");
    //#endregion

    //#region PROJECT
    ulNavBar.classList.add("navbar-nav");
    containerFluid.appendChild(ulNavBar);


    liNavProject.classList.add("nav-link");
    navItem1.appendChild(liNavProject);
    navItem1.classList.add("nav-item");
    ulNavBar.appendChild(navItem1);
    
    liNavProject.appendChild(project);
    liNavProject.setAttribute("href", "project.html");

    
    //#region GALLERY

    liNavGallery.classList.add("nav-link");
    navItem3.appendChild(liNavGallery);
    navItem3.classList.add("nav-item");
    ulNavBar.appendChild(navItem3);
    
    liNavGallery.appendChild(gallery);
    liNavGallery.setAttribute("href", "gallery.html");
    //#endregion

    
    //#region MAPS

    liNavMaps.classList.add("nav-link");
    navItem4.appendChild(liNavMaps);
    navItem4.classList.add("nav-item");
    ulNavBar.appendChild(navItem4);
    
    liNavMaps.appendChild(maps);
    liNavMaps.setAttribute("href", "maps.html");
    //#endregion
    
    
    //#region LINK

    liNavLink.classList.add("nav-link");
    navItem5.appendChild(liNavLink);
    navItem5.classList.add("nav-item");
    ulNavBar.appendChild(navItem5);
    
    liNavLink.appendChild(link);
    liNavLink.setAttribute("href", "links.html");
    //#endregion

     //#region SOUNDCLOUD
     button2.setAttribute("id", "soundId");
     button2.classList.add("soundcloud");
     button2.setAttribute("onclick", "soundPlay()");
     button2.classList.add("nav-link");
     navItem6.appendChild(button2);
     navItem6.classList.add("nav-item");
     ulNavBar.appendChild(navItem6);
     
     //#endregion

     //#region ICONplay
     iconPlay.setAttribute("style", "padding-right: 10px;");
     iconPlay.setAttribute("id", "iconPlayId");
     iconPlay.classList.add("fa");
     iconPlay.classList.add("fa-play");
     button2.appendChild(iconPlay);


     button2.setAttribute("id", "soundId");
     button2.classList.add("soundcloud");
     button2.setAttribute("onclick", "soundPlay()");


     
    document.getElementById("navigationId").appendChild(containerFluid);}
    