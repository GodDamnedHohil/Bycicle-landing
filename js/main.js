const menuBtn = document.querySelector('.menu-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn__wrap');
const navWrap = document.querySelector('.nav__wrap');
const popupWrap = document.querySelector('.popup__wrap');
const popupTrigger = document.querySelectorAll('.popup-trigger');
const popupCloseWrap = document.querySelector('.popup-close__wrap');
const authorLink = document.getElementById('author-link');
const aboutUs = document.querySelector('.about-us');
const upBtn = document.querySelector('.up-btn');

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
  
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
});

menuBtn.addEventListener('click', () => {
  navWrap.classList.add('active');
  document.body.style.overflow = 'hidden';
})

menuCloseBtn.addEventListener('click', () => {
  navWrap.classList.remove('active');
  document.body.style.overflow = 'auto';
})

popupTrigger.forEach((item) => {
  item.addEventListener('click', () => {
    event.preventDefault();
    popupWrap.classList.add('active');
    document.body.style.overflow = 'hidden';
  })
})

popupCloseWrap.addEventListener('click', () => {
  popupWrap.classList.remove('active');
  document.body.style.overflow = 'auto';
})

authorLink.addEventListener('click', () => {
  popupWrap.classList.remove('active');
  document.body.style.overflow = 'auto';
})

window.onscroll = () => {
  if(window.pageYOffset >= aboutUs.offsetTop) {
    upBtn.classList.add('active');
  } else {
    upBtn.classList.remove('active');
  }
}


