// 'use strict';
// window.addEventListener('DOMContentLoaded', function() {

// const wrapper = document.querySelector('.slider__wrapper'),
//       content = document.querySelectorAll('.slider__wrapper-content'),
//       prev = document.querySelector('.slider__wrapper-left'),
//       next = document.querySelector('.slider__wrapper-right'),
//       learn = document.querySelector('.slider__learn'),
//       width = window.getComputedStyle(learn).width;

//     let offset = 0;
//     let slideIndex = 1;

//     wrapper.style.width = 100 * content.length + '%';
//     wrapper.forEach(slide => {
//        slide.style.width = width; 
//     });
    
//     function deleeteNotDigits(str) {
//         return +str.replace(/\D/g, '');
//     }

//     next.addEventListener('click', () => {
//         if (offset == deleeteNotDigits(width) * (content.length - 1)) {
//             offset = 0;
//         } else {
//             offset += deleeteNotDigits(width); 
//         }

//         wrapper.style.transform = `translateX(-${offset}px)`;

//         if (slideIndex == content.length) {
//             slideIndex = 1;
//         } else {
//             slideIndex++;
//         }



//     });

//     prev.addEventListener('click', () => {
//         if (offset == 0) {
//             offset = deleeteNotDigits(width) * (content.length - 1);
//         } else {
//             offset -= deleeteNotDigits(width);
//         }

//         wrapper.style.transform = `translateX(-${offset}px)`;

//         if (slideIndex == 1) {
//             slideIndex = content.length;
//         } else {
//             slideIndex--;
//         }

    
// });



// });


let offset = 0;
let slideIndex = 1;

const wrapper = document.querySelector('.slider__wrapper'),
    content = document.querySelectorAll('.slider__wrapper-content'),
    prev = document.querySelector('.slider__wrapper-left'),
    next = document.querySelector('.slider__wrapper-right'),
    learn = document.querySelector('.slider__learn'),
    width = window.getComputedStyle(learn).width;
    

// if (content.length < 10) {
//     total.textContent = `0${content.length}`;
//     current.textContent =  `0${slideIndex}`;
// } else {
//     total.textContent = content.length;
//     current.textContent =  slideIndex;
// }

wrapper.style.width = 100 * content.length + '%';
wrapper.style.display = 'flex';
wrapper.style.transition = '0.5s all';

learn.style.overflow = 'hidden';

content.forEach(slide => {
    slide.style.width = width;
});

next.addEventListener('click', () => {
    if (offset == (+width.slice(0, width.length - 2) * (content.length - 1))) {
        offset = 0;
    } else {
        offset += +width.slice(0, width.length - 2); 
    }

    wrapper.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == content.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }

    // if (content.length < 10) {
    //     current.textContent =  `0${slideIndex}`;
    // } else {
    //     current.textContent =  slideIndex;
    // }
});

prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (content.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }

    wrapper.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = content.length;
    } else {
        slideIndex--;
    }

    // if (content.length < 10) {
    //     current.textContent =  `0${slideIndex}`;
    // } else {
    //     current.textContent =  slideIndex;
    // }
});
