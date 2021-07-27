var divContentProject = document.createElement("DIV");
var divContentProjectText = document.createElement("DIV");
var divContentProjectLogo = document.createElement("DIV");


var divWbrc = document.createElement("DIV");
var parWbrc = document.createElement("p");
var texWbrc = document.createTextNode("Western Balkan Reality Check");

var divContentProjectText1 = document.createElement("DIV");
var imgContentProjectKombi = document.createElement("img");
var imgContentProjectLogoWeb = document.createElement("img");
var divContentProjectText2 = document.createElement("DIV");

var parContentProjectText1 = document.createElement("p");
var parContentProjectText2 = document.createElement("p");

var textContentProjectText1_1 = document.createTextNode("From spring to fall, year 2020 of the New Era, a group of 5(five); proceeding from the peripheral epicentres of the globally corrupted and enslaved World(Novi Pazar, Struga and Belgrade), decided to venture in exploring the places in between their sociometric bubbles, which brought them to variuos insights and findings.");
var textContentProjectText1_2 = document.createTextNode("As the trend of social distancing escalated with a general fear of spreading the newest pandemic and the general curfew was imposed, the group conducted random phone calls throughout the geographical realm commonly addressed as Western Balkans.Wanting to witness the uncharted terrain from the first hand, in the second stage they ventured on a road trip with a borrowed van.");
var textContentProjectText1_3 = document.createTextNode("Pages of this journal present the testimony of their intents, endeavours and misconceptions. ");
var textContentProjectText2 = document.createTextNode("Tandem Western Balkans supports experimental collaborations between cultural change makers from Western Balkans. It is tailor-made for cultural managers who work on creative solutions that tackle contemporary challenges in our societies and want to cultivate pioneering ideas and generate socio-economic impact with partners throughout Western Balkans. The programme helps to create and sustain culturally innovative impact across sectors, disciplines and borders and allows");






try {
    // Project
    function pageProject() {

        divContent.classList.remove("content-index");
        divContent.classList.add("content-project");

        document.getElementById("buttonProjectId").setAttribute("style", "text-decoration: none;");


    }

    pageProject();

    // TEXT WBRC
    divWbrc.classList.add("wbrc-div");
    parWbrc.classList.add("wbrc-text");
    parWbrc.appendChild(texWbrc);
    divWbrc.appendChild(parWbrc);
    

    // TEXT 1
    divContentProjectText1.classList.add("paragraf-prvi");
    parContentProjectText1.appendChild(textContentProjectText1_1);
    parContentProjectText1.appendChild(textContentProjectText1_2);
    parContentProjectText1.appendChild(textContentProjectText1_3);
    divContentProjectText1.appendChild(parContentProjectText1);


    // KOMBI
    imgContentProjectKombi.classList.add("img-kombi");
    imgContentProjectKombi.setAttribute("src", "data/img/kombi.jpg");
    // imgContentProjectKombi.setAttribute("style", "height: auto;");

    // LOGO WEB
    imgContentProjectLogoWeb.classList.add("img-logo-web");
    imgContentProjectLogoWeb.setAttribute("src", "data/img/logo_web.png");
    // imgLogoWeb.setAttribute("style", "height: auto;");


    // TEXT 2
    divContentProjectText2.classList.add("paragraf-drugi");
    parContentProjectText2.appendChild(textContentProjectText2);
    divContentProjectText2.appendChild(parContentProjectText2);

    document.getElementById("contentId").appendChild(divWbrc);
    document.getElementById("contentId").appendChild(divContentProjectText1);
    document.getElementById("contentId").appendChild(imgContentProjectKombi);
    document.getElementById("contentId").appendChild(imgContentProjectLogoWeb);
    document.getElementById("contentId").appendChild(divContentProjectText2);


} catch (error) {
    console.log("Greska na fajlu: " + error.stack);
    console.log("Greska liniji broj: " + error.lineNumber);
    console.log("Greska: " + error.message);
}