
var divContainer = document.createElement("DIV");

var divNavigation = document.createElement("nav");
var divBar = document.createElement("DIV");
var divContent = document.createElement("DIV");
var divFooter = document.createElement("DIV");




try {
    divContainer.setAttribute("id", "containerId");
    divContainer.classList.add("container");
    


    divNavigation.setAttribute("id", "navigationId");
    divNavigation.classList.add("navigation");
    divNavigation.classList.add("navbar");
    divNavigation.classList.add("navbar-expand-lg");
    divNavigation.classList.add("navbar-dark");
    divContainer.appendChild(divNavigation);

    divBar.setAttribute("id", "barId");
    divBar.classList.add("bar");
    divContainer.appendChild(divBar);

    divContent.setAttribute("id", "contentId");
    divContent.classList.add("content-index");
    divContainer.appendChild(divContent);

    divFooter.setAttribute("id", "footerId");
    divFooter.classList.add("footer");
    divContainer.appendChild(divFooter);


    document.body.appendChild(divContainer);

    
}
catch (error) {
    console.log("Greska na fajlu: " + error.stack);
    console.log("Greska liniji broj: " + error.lineNumber);
    console.log("Greska: " + error.message);
}