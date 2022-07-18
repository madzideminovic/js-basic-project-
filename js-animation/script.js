var textTag = document.querySelector(".section h1");
var text = textTag.textContent;


var splittedText = text.split('');


textTag.innerHTML = " ";

for (let i = 0; i < splittedText.length; i++) {

    if (splittedText[i] == " ") {
        splittedText[i] = "&nbsp;";
    }

    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}


var spans = textTag.querySelectorAll("span");
var k = 0;
var interval = setInterval(() => {

    var singleSpan = spans[k];

    singleSpan.className = 'fadeMove';

    k++;

    if (k === spans.length) {
        clearInterval(interval);
    }
}, 70);



var border = document.querySelector(".border-line");
var animationWidth = 0;

window.onscroll = () => {

    if (this.oldScroll > this.scrollY) {
        animationWidth -= 1;
    }
    else {
        animationWidth += 1;
    }

    if (animationWidth >= 100) {
        animationWidth = 100;
    }

    if (animationWidth <= 0) {
        animationWidth = 0;
    }

    border.style.width = animationWidth + '%';

    this.oldScroll = this.scrollY;


    imageAnimation();

}

const imageAnimation = () => {

    var sectionForAnimation = document.querySelector('.section .images');
    var sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;


    var leftImages = document.querySelector(".slideFromLeft");
    var rightImages = document.querySelector(".slideFromRight");

    if (sectionPosition < screenPosition) {
        leftImages.classList.add("animated");
        rightImages.classList.add("animated");
    }
}