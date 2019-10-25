'use strict';

const imageList = [
    { url: "1.jpg", text: "Vincent van Gogh, 1888", moreText: "The Garden at Arles" },
    { url: "2.jpg", text: 'Vincent van Gogh, 1889', moreText: "Irises" },
    { url: "3.jpg", text: 'Vincent van Gogh, 1889', moreText: "Landscape with Olive Trees" },
    { url: "4.jpg", text: 'Vincent van Gogh, 1889', moreText: "Wheatfield with Cypresses" },
    { url: "5.jpg", text: 'Vincent van Gogh, 1890', moreText: "Poppy Field" },
    { url: "6.jpg", text: 'Vincent van Gogh, 1890', moreText: "Almond Blossoms" }
]

let currentImage = imageList[0].url;
let previousButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");
let mainImage = document.querySelector(".main");

function toNextImage() {
    let nextImage = document.querySelector(".currentImage").nextElementSibling;
    if (nextImage === null) {
        nextImage = document.querySelector(".small");
    }
    mainImage.src = nextImage.src;
}

function toPreviousImage() {

}


function onKeyPress(event) {
    switch (event.keyCode) {
        case 37:
            toPreviousImage();
            break;
        case 39:
            toNextImage();
            break;
    }
}
