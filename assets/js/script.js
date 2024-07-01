let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}


// Course Slider
var courseSwiper = new Swiper(".course-slider", {
   spaceBetween: 20,
   grabCursor: true,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
   autoplay: {
     delay: 3000, // Auto slide every 3 seconds for course slider
     disableOnInteraction: false,
   },
});

// Teachers Slider
var teachersSwiper = new Swiper(".teachers-slider", {
   spaceBetween: 20,
   grabCursor: true,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
   autoplay: {
     delay: 2500, // Auto slide every 2.5 seconds for teachers slider
     disableOnInteraction: false,
   },
});

// Reviews Slider
var reviewsSwiper = new Swiper(".reviews-slider", {
   spaceBetween: 20,
   grabCursor: true,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
   },
   autoplay: {
     delay: 4000, // Auto slide every 4 seconds for reviews slider
     disableOnInteraction: false,
   },
});

