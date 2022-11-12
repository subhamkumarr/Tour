let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

let videoBtn = document.querySelectorAll('.vid-btn');


//scroll down karne se, search bar wala section hat jayga
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');

    loginForm.classList.remove('active');
    
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
}

//search wale icon pe click karne se, textbar(search space) khulega
searchBtn.addEventListener('click', () =>{
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});

//click on user icon to open login form
formBtn.addEventListener('click', () =>{
  loginForm.classList.add('active');
});

//click on cross icon to close the login form
formClose.addEventListener('click', () =>{
  loginForm.classList.remove('active');
});

//responsive me menu bar collapse hone wala 
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});