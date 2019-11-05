'use strict';

const imageList = [
    { url: "1.jpg", text: "Vincent van Gogh, 1888", moreText: "The Garden at Arles" },
    { url: "2.jpg", text: 'Vincent van Gogh, 1889', moreText: "Irises" },
    { url: "3.jpg", text: 'Vincent van Gogh, 1889', moreText: "Landscape with Olive Trees" },
    { url: "4.jpg", text: 'Vincent van Gogh, 1889', moreText: "Wheatfield with Cypresses" },
    { url: "5.jpg", text: 'Vincent van Gogh, 1890', moreText: "Poppy Field" },
    { url: "6.jpg", text: 'Vincent van Gogh, 1890', moreText: "Almond Blossoms" }
]

let currentImage = document.querySelector(".small").classList.add("currentImage");
let prevButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");
let mainImg = document.querySelector(".main");
let mainTitle = document.querySelector(".moreText");
let mainText = document.querySelector(".theText");

function changeText() {
    for (let i = 0; i < imageList.length; i++) {
        if (mainImg.src === "http://localhost:3000/" + imageList[i].url) {
            mainTitle.textContent = imageList[i].moreText;
            mainText.textContent = imageList[i].theText;
        }
    }
}

function toPreviousImage() {
    let prevImage = document.querySelector(".currentImage").previousElementSibling;
    if (prevImage === null) {
        let allElement = document.querySelectorAll(".small")
        prevImage = allElement[allElement.length - 1];
    }
    mainImg.src = prevImage.src;
    document.querySelector(".currentImage").classList.remove("currentImage");
    prevImage.classList.add("currentImage");
    changeText()

}

function toNextImage() {
    let nextImage = document.querySelector(".currentImage").nextElementSibling;
    if (nextImage === null) {
        nextImage = document.querySelector(".small");
    }
    mainImg.src = nextImage.src;
    document.querySelector(".currentImage").classList.remove("currentImage");
    nextImage.classList.add("currentImage");
    changeText()
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

nextButton.onclick = () => {
    toNextImage();
}
prevButton.onclick = () => {
    toPreviousImage();
}

let smallPix = document.querySelectorAll(".small");

for (let i = 0; i < smallPix.length; i++) {
    smallPix[i].onclick = () => { //(event)
        mainImg.src = smallPix[i].src; //event.target.src
        document.querySelector(".currentImage").classList.remove("currentImage");
        smallPix[i].classList.add('currentImage');
        changeText();
    }
}



document.body.addEventListener('keydown', onKeyPress);
