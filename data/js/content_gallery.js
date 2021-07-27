


try {
    document.getElementById("buttonGalleryId").setAttribute("style", "text-decoration: none;");
    document.getElementById("contentId").classList.remove("content-index");
    document.getElementById("contentId").classList.add("content-gallery");


    var listaDivGalleryImage = [];
    var listalinkGalleryImage = [];
    var listaImgGalleryImage = [];

    for (i = 1; i < 50; i++) {
        listaDivGalleryImage.push("DivGalleryImage" + i);
        listaImgGalleryImage.push("LinkGalleryImage" + i);
        listaImgGalleryImage.push("ImgGalleryImage" + i);

        listaDivGalleryImage[i] = document.createElement("DIV");
        listalinkGalleryImage[i] = document.createElement("a");
        listaImgGalleryImage[i] = document.createElement("img");
        
        listaDivGalleryImage[i].classList.add("gallery-frame");
        listalinkGalleryImage[i].classList.add("gallery-link");
        listaImgGalleryImage[i].classList.add("gallery-image");
        listaImgGalleryImage[i].setAttribute("src", "data/gallery/img_" + i + ".jpg");
        listaImgGalleryImage[i].setAttribute("alt", "Fotografija nije ucitana.");


        var linkGallery = "data/gallery/img_" + i + ".jpg";

        listalinkGalleryImage[i].setAttribute("href", linkGallery);

        listalinkGalleryImage[i].appendChild(listaImgGalleryImage[i]);


        listaDivGalleryImage[i].appendChild(listalinkGalleryImage[i]);

        document.getElementById("contentId").appendChild(listaDivGalleryImage[i]);
    }





}
catch (error) {
    console.log("Greska na fajlu: " + error.stack);
    console.log("Greska liniji broj: " + error.lineNumber);
    console.log("Greska: " + error.message);
}