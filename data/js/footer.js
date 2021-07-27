
var timeObject = new Date;
var godina = timeObject.getFullYear();

var divFooter = document.createElement("DIV");
var parFooter = document.createElement("p");
var yearText = document.createTextNode(godina);
var textFooter = document.createTextNode(" Copyleft ");
var space = document.createTextNode(" ");
var elIcon = document.createElement("i");


try {
    elIcon.classList.add("fa");
    elIcon.classList.add("fa-copyright");

    
    parFooter.appendChild(textFooter);
    parFooter.appendChild(elIcon);
    parFooter.appendChild(space);
    parFooter.appendChild(yearText);
    divFooter.appendChild(parFooter);
    divFooter.classList.add("container-fluid");
    document.getElementById("footerId").appendChild(divFooter);

}
catch (error) {
    console.log("Greska na fajlu: " + error.stack);
    console.log("Greska liniji broj: " + error.lineNumber);
    console.log("Greska: " + error.message);
}