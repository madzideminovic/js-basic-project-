var crashRide = document.querySelector("#crash-ride");
var hiHatTop = document.querySelector("#hihat-top");

const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
}

const animateHiHatClosed = () => {
    hiHatTop.style.top = '171px';
}


window.addEventListener("keydown", (event) => {
    var code = event.keyCode;
    var keyElement = document.querySelector(`div[data-key = "${code}"]`)

if(!keyElement) return;

    var audio = document.querySelector(`audio[data-key = "${code}"]`);
    audio.currentTime = 0;
    audio.play();

    switch(code) {
        case 69:
        case 82:
            animateCrashOrRide();
            break;
            case 75:
            case 73:
                animateHiHatClosed();
                break;
    }

    keyElement.classList.add("playing");
});


const removeCrashRideTransition = e => {
    if(e.propertyName !== 'transform' ) return;

    e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
}

const removeHiHatTopTransition = e => {
    if(e.propertyName !== 'top' ) return;

    e.target.style.top = '166px';
}

const removeKeyTransition = e => {
    if(e.propertyName !== 'transform' ) return;

    e.target.classList.remove(".playing");
}

var drumKey = document.querySelectorAll(".key");

drumKey.forEach(key => {
    key.addEventListener("transitionend", removeKeyTransition)
});

crashRide.addEventListener("transitionend", removeCrashRideTransition);
hiHatTop.addEventListener("transitionend", removeHiHatTopTransition);