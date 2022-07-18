//Responsive menu

const mobileMenu = () => {
    var menu = document.querySelector(".header ul");
    var btn = document.querySelector(".header button");

    if (btn.innerText === 'MENU') {
        menu.style.display = "block";
        btn.innerText = "CLOSE";
    }
    else {
        menu.style.display = 'none';
        btn.innerText = "MENU";
    }

}

// Gallery

var rightBtn = document.querySelector('#right-btn');
var leftBtn = document.querySelector('#left-btn');
var pictures = document.querySelectorAll(".slider-images img");
var imgNum = 0;

const moveRight = () => {
    displayNone();
    imgNum++;

    if (imgNum === pictures.length) {
        imgNum = 0;
    }
    pictures[imgNum].style.display = 'block';
}

rightBtn.addEventListener("click", moveRight);

const moveLeft = () => {
    displayNone();
    imgNum--;

    if (imgNum === -1) {
        imgNum = pictures.length -1;
    }

    pictures[imgNum].style.display = 'block';
}
leftBtn.addEventListener("click", moveLeft);

const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    });
}


//Portfolio 

const portfolioSort = (button) => {
  var category = button.getAttribute('data-category');
  
  var portfolioItems = document.querySelectorAll(".portfolio-single-item");


  portfolioItems.forEach((item) => {
    item.style.display = 'none';
}); 

if(category === 'all')
portfolioItems.forEach((item) => {
    item.style.display = 'block';
});  
  
portfolioItems.forEach((item) => {
   if( item.getAttribute('data-category').includes(category))   {
    item.style.display = 'block';
   }
})

}

//Modal

const openModal = () => {
    var modalWindow = document.querySelector('.popup-modal');
    var overlay = document.querySelector('.overlay')

    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
}

const closeModal = () => {
    var modalWindow = document.querySelector('.popup-modal');
    var overlay = document.querySelector('.overlay')

    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
}