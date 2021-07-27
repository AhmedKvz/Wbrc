var divRatio = document.createElement("DIV");
var iframeMap = document.createElement("iframe");
var urlMap = "https://www.openstreetmap.org/export/embed.html?bbox=-246.97265625000003%2C-45.460130637921%2C-14.941406250000002%2C71.52490903732816&amp;layer=mapnik&amp;marker=25.562265014427492%2C-130.95703125";
var widthMap = "100%";
var heightMap = "100%";

var elSmall = document.createElement("small");
var buttonLinkMap = document.createElement("a");
var ulrLinkMap = "https://www.openstreetmap.org/?mlat=25.56&amp;mlon=-130.96#map=3/25.56/-130.96";


try {
    // document.getElementById("buttonIndexId").setAttribute("style", "text-decoration: none;");


    iframeMap.setAttribute("display", "block");
    iframeMap.setAttribute("width", widthMap);
    iframeMap.setAttribute("height", heightMap);
    iframeMap.setAttribute("frameborder", "0");
    iframeMap.setAttribute("scrolling", "no");
    iframeMap.setAttribute("marginheight", "0");
    iframeMap.setAttribute("marginwidth", "0");
    iframeMap.setAttribute("src", urlMap);
    iframeMap.setAttribute("style", "border: 1px solid black");
    divRatio.appendChild(iframeMap);
    divRatio.classList.add("ratio"); 
    divRatio.classList.add("ratio-16x9");
    document.getElementById("contentId").appendChild(divRatio);

    buttonLinkMap.setAttribute("href", ulrLinkMap);
    elSmall.appendChild(buttonLinkMap);
    document.getElementById("contentId").appendChild(elSmall);
}
catch (error) {
    console.log("Greska na fajlu: " + error.stack);
    console.log("Greska liniji broj: " + error.lineNumber);
    console.log("Greska: " + error.message);
}