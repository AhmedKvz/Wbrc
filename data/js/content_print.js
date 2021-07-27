var divSlideShow = document.createElement("DIV");

var mySlidesFade1 = document.createElement("DIV");
var mySlidesFade2 = document.createElement("DIV");
var mySlidesFade3 = document.createElement("DIV");
var mySlidesFade4 = document.createElement("DIV");
var mySlidesFade5 = document.createElement("DIV");
var mySlidesFade6 = document.createElement("DIV");
var mySlidesFade7 = document.createElement("DIV");
var mySlidesFade8 = document.createElement("DIV");
var mySlidesFade9 = document.createElement("DIV");

var slideImage1 = document.createElement("img");
var slideImage2 = document.createElement("img");
var slideImage3 = document.createElement("img");
var slideImage4 = document.createElement("img");
var slideImage5 = document.createElement("img");
var slideImage6 = document.createElement("img");
var slideImage7 = document.createElement("img");
var slideImage8 = document.createElement("img");
var slideImage9 = document.createElement("img");

var buttonPrev = document.createElement("a");
var buttonNext = document.createElement("a");

var textPrev = document.createTextNode("&#8249;");
var textNext = document.createTextNode("&#8250;");






var slideIndex = 1;

try {
    document.getElementById("buttonPrintId").setAttribute("style", "text-decoration: none;");
    document.getElementById("contentId").classList.remove("content-index");
    document.getElementById("contentId").classList.add("content-print")
    divSlideShow.classList.add("slideshow-container");



    //#region SLIDESHOW 1
    slideImage1.setAttribute("src", "data/img/print/01.png");
    slideImage1.setAttribute("style", "width:100%");
    mySlidesFade1.classList.add("mySlides");
    mySlidesFade1.classList.add("fade");
    mySlidesFade1.appendChild(slideImage1);
    divSlideShow.appendChild(mySlidesFade1);
    //#endregion

    //#region SLIDESHOW 2
    slideImage2.setAttribute("src", "data/img/print/02.png");
    slideImage2.setAttribute("style", "width:100%");
    mySlidesFade2.classList.add("mySlides");
    mySlidesFade2.classList.add("fade");
    mySlidesFade2.appendChild(slideImage2);
    divSlideShow.appendChild(mySlidesFade2);
    //#endregion

    //#region SLIDESHOW 3
    slideImage3.setAttribute("src", "data/img/print/03.png");
    slideImage3.setAttribute("style", "width:100%");
    mySlidesFade3.classList.add("mySlides");
    mySlidesFade3.classList.add("fade");
    mySlidesFade3.appendChild(slideImage3);
    divSlideShow.appendChild(mySlidesFade3);
    //#endregion

    //#region SLIDESHOW 4
    slideImage4.setAttribute("src", "data/img/print/04.png");
    slideImage4.setAttribute("style", "width:100%");
    mySlidesFade4.classList.add("mySlides");
    mySlidesFade4.classList.add("fade");
    mySlidesFade4.appendChild(slideImage4);
    divSlideShow.appendChild(mySlidesFade4);
    //#endregion

    //#region SLIDESHOW 5
    slideImage5.setAttribute("src", "data/img/print/05.png");
    slideImage5.setAttribute("style", "width:100%");
    mySlidesFade5.classList.add("mySlides");
    mySlidesFade5.classList.add("fade");
    mySlidesFade5.appendChild(slideImage5);
    divSlideShow.appendChild(mySlidesFade5);
    //#endregion

    //#region SLIDESHOW 6
    slideImage6.setAttribute("src", "data/img/print/06.png");
    slideImage6.setAttribute("style", "width:100%");
    mySlidesFade6.classList.add("mySlides");
    mySlidesFade6.classList.add("fade");
    mySlidesFade6.appendChild(slideImage6);
    divSlideShow.appendChild(mySlidesFade6);
    //#endregion

    //#region SLIDESHOW 7
    slideImage7.setAttribute("src", "data/img/print/07.png");
    slideImage7.setAttribute("style", "width:100%");
    mySlidesFade7.classList.add("mySlides");
    mySlidesFade7.classList.add("fade");
    mySlidesFade7.appendChild(slideImage7);
    divSlideShow.appendChild(mySlidesFade7);
    //#endregion

    //#region SLIDESHOW 8
    slideImage8.setAttribute("src", "data/img/print/08.png");
    slideImage8.setAttribute("style", "width:100%");
    mySlidesFade8.classList.add("mySlides");
    mySlidesFade8.classList.add("fade");
    mySlidesFade8.appendChild(slideImage8);
    divSlideShow.appendChild(mySlidesFade8);
    //#endregion

    //#region SLIDESHOW 9
    slideImage9.setAttribute("src", "data/img/print/09.png");
    slideImage9.setAttribute("style", "width:100%");
    mySlidesFade9.classList.add("mySlides");
    mySlidesFade9.classList.add("fade");
    mySlidesFade9.appendChild(slideImage9);
    divSlideShow.appendChild(mySlidesFade9);
    //#endregion

    buttonPrev.classList.add("prev");
    buttonPrev.setAttribute("onclick", "plusSlides(-1, 0)");
    buttonPrev.appendChild(textPrev);
    divSlideShow.appendChild(buttonPrev);

    
    buttonNext.classList.add("next");
    buttonNext.setAttribute("href", "#");
    buttonNext.setAttribute("onclick", "plusSlides(1, 0)");
    buttonNext.appendChild(textNext);
    divSlideShow.appendChild(buttonNext);
    
    
    
    
    
    document.getElementById("contentId").appendChild(divSlideShow);





    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";

    }


}
catch (error) {
    console.log("Greska na fajlu: " + error.stack);
    console.log("Greska liniji broj: " + error.lineNumber);
    console.log("Greska: " + error.message);
}

