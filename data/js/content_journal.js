var journalSlideShow = document.createElement("DIV");

var divRowJournal = document.createElement("DIV");
var divColumnJournal = document.createElement("DIV");
var imgColumnJournal = document.createElement("img");

//#region MODAL
var divModal = document.createElement("DIV");
var spanModal = document.createElement("span");
var textSpanModal = document.createTextNode("&times;");

var divModalContent = document.createElement("DIV");

var divMySlides1 = document.createElement("DIV");
var divNumberText1 = document.createElement("DIV");
var textNumberText1 = document.createTextNode("1 / 9");
var imgMySlides1 = document.createElement("img");

var divMySlides2 = document.createElement("DIV");
var divNumberText2 = document.createElement("DIV");
var textNumberText2 = document.createTextNode("2 / 9");
var imgMySlides2 = document.createElement("img");

var divMySlides3 = document.createElement("DIV");
var divNumberText3 = document.createElement("DIV");
var textNumberText3 = document.createTextNode("3 / 9");
var imgMySlides3 = document.createElement("img");

var divMySlides4 = document.createElement("DIV");
var divNumberText4 = document.createElement("DIV");
var textNumberText4 = document.createTextNode("4 / 9");
var imgMySlides4 = document.createElement("img");

var divMySlides5 = document.createElement("DIV");
var divNumberText5 = document.createElement("DIV");
var textNumberText5 = document.createTextNode("5 / 9");
var imgMySlides5 = document.createElement("img");

var divMySlides6 = document.createElement("DIV");
var divNumberText6 = document.createElement("DIV");
var textNumberText6 = document.createTextNode("6 / 9");
var imgMySlides6 = document.createElement("img");

var divMySlides7 = document.createElement("DIV");
var divNumberText7 = document.createElement("DIV");
var textNumberText7 = document.createTextNode("7 / 9");
var imgMySlides7 = document.createElement("img");

var divMySlides8 = document.createElement("DIV");
var divNumberText8 = document.createElement("DIV");
var textNumberText8 = document.createTextNode("8 / 9");
var imgMySlides8 = document.createElement("img");


//#endregion MODAL


//#region NEXT PREVIOUS
var linkPrev = document.createElement("a");
var linkNext = document.createElement("a");
var textLinkPrev = document.createTextNode("&#10094;");
var textLinkNext = document.createTextNode("&#10095;");
//#endregion NEXT PREVIOUS

//#region CAPTION CONTAINER
var divCaptionContainer = document.createElement("DIV");
var paragraphCaption = document.createElement("p");
//#endregion CAPTION CONTAINER

//#region COLUMN    
var divColumn1 = document.createElement("DIV");
var imgColumn1 = document.createElement("img");


var divColumn2 = document.createElement("DIV");
var imgColumn2 = document.createElement("img");


var divColumn3 = document.createElement("DIV");
var imgColumn3 = document.createElement("img");


var divColumn4 = document.createElement("DIV");
var imgColumn4 = document.createElement("img");


var divColumn5 = document.createElement("DIV");
var imgColumn5 = document.createElement("img");


var divColumn6 = document.createElement("DIV");
var imgColumn6 = document.createElement("img");


var divColumn7 = document.createElement("DIV");
var imgColumn7 = document.createElement("img");


var divColumn8 = document.createElement("DIV");
var imgColumn8 = document.createElement("img");
//#endregion 

try {

    document.getElementById("buttonPrintId").setAttribute("style", "text-decoration: none;");
    document.getElementById("contentId").classList.remove("content-index");
    document.getElementById("contentId").classList.add("content-print")
    journalSlideShow.classList.add("journal-container");


    //#region DIV ROW
    
    imgColumnJournal.setAttribute("src", "data/img/journal/zurnal_01.png");
    imgColumnJournal.setAttribute("style", "width:100%");
    imgColumnJournal.setAttribute("onclick", "openModal();currentSlide(1)");
    imgColumnJournal.classList.add("hover-shadow");
    imgColumnJournal.classList.add("cursor");
    // divColumnJournal.appendChild(imgColumnJournal);
    // divColumnJournal.classList.add("column");
    divRowJournal.appendChild(imgColumnJournal);
    divRowJournal.classList.add("row");
    journalSlideShow.appendChild(divRowJournal);
    //#endregion

    //#region MODAL
    spanModal.classList.add("close");
    spanModal.classList.add("cursor");
    spanModal.setAttribute("onclick", "closeModal()");
    divModal.appendChild(spanModal);
    spanModal.appendChild(textSpanModal);
    divModal.setAttribute("id", "myModal");
    divModal.classList.add("modal");
    journalSlideShow.appendChild(divModal);
    //#endregion

    //#region MODAL CONTENT
    divModalContent.classList.add("modal-content");
    divModal.appendChild(divModalContent);
    //#endregion

    //#region MY SLIDE1
    divMySlides1.classList.add("mySlides");
    divNumberText1.classList.add("number-text");
    imgMySlides1.setAttribute("src", "data/img/journal/zurnal_02.png");
    imgMySlides1.setAttribute("style", "width:100%");
    divNumberText1.appendChild(textNumberText1);
    divMySlides1.appendChild(divNumberText1);
    divMySlides1.appendChild(imgMySlides1);
    divModalContent.appendChild(divMySlides1);
    //#endregion

    //#region MY SLIDE2
    divMySlides2.classList.add("mySlides");
    divNumberText2.classList.add("number-text");
    imgMySlides2.setAttribute("src", "data/img/journal/zurnal_03.png");
    imgMySlides2.setAttribute("style", "width:100%");
    divNumberText2.appendChild(textNumberText2);
    divMySlides2.appendChild(divNumberText2);
    divMySlides2.appendChild(imgMySlides2);
    divModalContent.appendChild(divMySlides2);
    //#endregion



    //#region MY SLIDE3
    divNumberText3.classList.add("number-text");
    divNumberText3.appendChild(textNumberText3);
    divMySlides3.appendChild(divNumberText3);
    divMySlides3.appendChild(imgMySlides3);
    imgMySlides3.setAttribute("src", "data/img/journal/zurnal_04.png");
    imgMySlides3.setAttribute("style", "width:100%");
    divMySlides3.classList.add("mySlides");
    divModalContent.appendChild(divMySlides3);
    //#endregion

    //#region MY SLIDE4
    divNumberText4.classList.add("number-text");
    divNumberText4.appendChild(textNumberText4);
    divMySlides4.appendChild(divNumberText4);
    divMySlides4.appendChild(imgMySlides4);
    imgMySlides4.setAttribute("src", "data/img/journal/zurnal_05.png");
    imgMySlides4.setAttribute("style", "width:100%");
    divMySlides4.classList.add("mySlides");
    divModalContent.appendChild(divMySlides4);
    //#endregion

    //#region MY SLIDE5
    divNumberText5.classList.add("number-text");
    divNumberText5.appendChild(textNumberText5);
    divMySlides5.appendChild(divNumberText5);
    divMySlides5.appendChild(imgMySlides5);
    imgMySlides5.setAttribute("src", "data/img/journal/zurnal_06.png");
    imgMySlides5.setAttribute("style", "width:100%");
    divMySlides5.classList.add("mySlides");
    divModalContent.appendChild(divMySlides5);
    //#endregion


    //#region MY SLIDE6
    divNumberText6.classList.add("number-text");
    divNumberText6.appendChild(textNumberText6);
    divMySlides6.appendChild(divNumberText6);
    divMySlides6.appendChild(imgMySlides6);
    imgMySlides6.setAttribute("src", "data/img/journal/zurnal_07.png");
    imgMySlides6.setAttribute("style", "width:100%");
    divMySlides6.classList.add("mySlides");
    divModalContent.appendChild(divMySlides6);
    //#endregion

    //#region MY SLIDE7
    divNumberText7.classList.add("number-text");
    divNumberText7.appendChild(textNumberText7);
    divMySlides7.appendChild(divNumberText7);
    divMySlides7.appendChild(imgMySlides7);
    imgMySlides7.setAttribute("style", "width:100%");
    divMySlides7.classList.add("mySlides");
    divModalContent.appendChild(divMySlides7);
    //#endregion

    //#region MY SLIDE8
    divNumberText8.classList.add("number-text");
    divNumberText8.appendChild(textNumberText8);
    divMySlides8.appendChild(divNumberText8);
    divMySlides8.appendChild(imgMySlides8);
    imgMySlides8.setAttribute("src", "data/img/journal/zurnal_09.png");
    imgMySlides8.setAttribute("style", "width:100%");
    divMySlides8.classList.add("mySlides");
    divModalContent.appendChild(divMySlides8);
    //#endregion

    //#region PREV NEXT
    linkPrev.classList.add("prev");
    linkPrev.setAttribute("onclick", "plusSlides(-1)");
    linkPrev.appendChild(textLinkPrev);
    divModalContent.appendChild(linkPrev);


    linkNext.classList.add("next");
    linkNext.setAttribute("onclick", "plusSlides(1)");
    linkNext.appendChild(textLinkNext);
    divModalContent.appendChild(linkNext);
    //#endregion

    //#region CAPTION CONTAINER
    divCaptionContainer.classList.add("caption-container");
    paragraphCaption.setAttribute("id", "caption");
    divCaptionContainer.appendChild(paragraphCaption);
    divModalContent.appendChild(divCaptionContainer);
    //#endregion

    //#region COLUMN 1
    imgColumn1.classList.add("demo");
    imgColumn1.classList.add("cursor");
    imgColumn1.setAttribute("src", "data/img/journal/zurnal_02.png");
    imgColumn1.setAttribute("style", "width:100%");
    imgColumn1.setAttribute("onclick", "currentSlide(1)");
    imgColumn1.setAttribute("alt", "01");
    divColumn1.classList.add("column");
    divColumn1.appendChild(imgColumn1);
    divModalContent.appendChild(divColumn1);
    //#endregion

    //#region COLUMN 2
    imgColumn2.classList.add("demo");
    imgColumn2.classList.add("cursor");
    imgColumn2.setAttribute("src", "data/img/journal/zurnal_03.png");
    imgColumn2.setAttribute("style", "width:100%");
    imgColumn2.setAttribute("onclick", "currentSlide(2)");
    imgColumn2.setAttribute("alt", "02");
    divColumn2.classList.add("column");
    divColumn2.appendChild(imgColumn2);
    divModalContent.appendChild(divColumn2);
    //#endregion

    //#region COLUMN 3
    imgColumn3.classList.add("demo");
    imgColumn3.classList.add("cursor");
    imgColumn3.setAttribute("src", "data/img/journal/zurnal_04.png");
    imgColumn3.setAttribute("style", "width:100%");
    imgColumn3.setAttribute("onclick", "currentSlide(3)");
    imgColumn3.setAttribute("alt", "03");
    divColumn3.classList.add("column");
    divColumn3.appendChild(imgColumn3);
    divModalContent.appendChild(divColumn3);
    //#endregion


    //#region COLUMN 4
    imgColumn4.classList.add("demo");
    imgColumn4.classList.add("cursor");
    imgColumn4.setAttribute("src", "data/img/journal/zurnal_05.png");
    imgColumn4.setAttribute("style", "width:100%");
    imgColumn4.setAttribute("onclick", "currentSlide(4)");
    imgColumn4.setAttribute("alt", "04");
    divColumn4.classList.add("column");
    divColumn4.appendChild(imgColumn4);
    divModalContent.appendChild(divColumn4);
    //#endregion


    //#region COLUMN 5
    imgColumn5.classList.add("demo");
    imgColumn5.classList.add("cursor");
    imgColumn5.setAttribute("src", "data/img/journal/zurnal_06.png");
    imgColumn5.setAttribute("style", "width:100%");
    imgColumn5.setAttribute("onclick", "currentSlide(5)");
    imgColumn5.setAttribute("alt", "05");
    divColumn5.classList.add("column");
    divColumn5.appendChild(imgColumn5);
    divModalContent.appendChild(divColumn5);
    //#endregion

    //#region COLUMN 6
    imgColumn6.classList.add("demo");
    imgColumn6.classList.add("cursor");
    imgColumn6.setAttribute("src", "data/img/journal/zurnal_07.png");
    imgColumn6.setAttribute("style", "width:100%");
    imgColumn6.setAttribute("onclick", "currentSlide(6)");
    imgColumn6.setAttribute("alt", "06");
    divColumn6.classList.add("column");
    divColumn6.appendChild(imgColumn6);
    divModalContent.appendChild(divColumn6);
    //#endregion


    //#region COLUMN 7
    imgColumn7.classList.add("demo");
    imgColumn7.classList.add("cursor");
    imgColumn7.setAttribute("src", "data/img/journal/zurnal_08.png");
    imgColumn7.setAttribute("style", "width:100%");
    imgColumn7.setAttribute("onclick", "currentSlide(7)");
    imgColumn7.setAttribute("alt", "07");
    divColumn7.classList.add("column");
    divColumn7.appendChild(imgColumn7);
    divModalContent.appendChild(divColumn7);
    //#endregion

    //#region COLUMN 8
    imgColumn8.classList.add("demo");
    imgColumn8.classList.add("cursor");
    imgColumn8.setAttribute("src", "data/img/journal/zurnal_09.png");
    imgColumn8.setAttribute("style", "width:100%");
    imgColumn8.setAttribute("onclick", "currentSlide(8)");
    imgColumn8.setAttribute("alt", "08");
    divColumn8.classList.add("column");
    divColumn8.appendChild(imgColumn8);
    divModalContent.appendChild(divColumn8);
    //#endregion





    document.getElementById("contentId").appendChild(journalSlideShow);






}
catch (error) {
    console.log("Greska na fajlu: " + error.stack);
    console.log("Greska liniji broj: " + error.lineNumber);
    console.log("Greska: " + error.message);
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}