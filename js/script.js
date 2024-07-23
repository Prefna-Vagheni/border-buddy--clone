const toggleBtn = document.querySelector('.bars');
const list = document.querySelector('.list__block');
const searchSection = document.querySelector('.search__section');
const closeSection = document.querySelector('.fa-times');
const searchBtn = document.querySelector('.search');
const counters = document.querySelectorAll('.counter');
const navBar = document.querySelector('.header');
const sticky = navBar.offsetTop;

console.log(sticky);
// ***************STYCKY NAVBAR**************************\\

window.addEventListener('scroll', () => {
  if (window.scrollY >= 130) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }
});
// window.onscroll = myScroll;

// ===============SMOOTH SCROLL============================\\
const allLinks = document.querySelectorAll('a:link');
allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector('href');
      sectionEl.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});
// ===============DYNAMIC YEAR IN FOOTER===================\\

document.querySelector('.year').textContent = new Date().getFullYear();

//Toggle Button
toggleBtn.addEventListener('click', () => {
  list.classList.toggle('hidden');
});

searchBtn.addEventListener('click', () => {
  searchSection.style.marginTop = 0;

  closeSection.addEventListener('click', () => {
    searchSection.style.marginTop = '-10000px';
  });
});

//COUNTER UP
counters.forEach((counter) => {
  counter.textContent = '0';
  // let num = Intl.NumberFormat('en-US').format(+counter);
  // console.log(num);
  const updateCounter = function () {
    const target = +counter.getAttribute('data-target');
    const numFormat = Intl.NumberFormat('en-US').format(target);
    const c = +counter.textContent;
    const increament = target / 250;

    if (c < target) {
      counter.textContent = `${Math.ceil(c + increament)}`;

      setTimeout(updateCounter, 2);
    } else {
      counter.textContent = numFormat;
    }
  };
  updateCounter();
});

// CAROUSEL ANIMATION
const paragraphs = document.querySelectorAll('.article .review__article');
const dotsContainer = document.querySelector('.dots__container');

let speed = 5000;
let index = 0;
let intervalID;
const maxLenght = paragraphs.length;

const goToSlide = function (slide) {
  paragraphs.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const activateDots = function (slide) {
  document
    .querySelectorAll('.dots')
    .forEach((dot) => dot.classList.remove('dots--active'));
  document
    .querySelector(`.dots[data-slide="${slide}"]`)
    .classList.add('dots--active');
};

//Create dots
const createDots = function () {
  paragraphs.forEach(function (_, i) {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<div class="dots" data-slide="${i}"></div>`
    );
  });
};

goToSlide(0);
createDots();
activateDots(0);

dotsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDots(slide);
  }
});

const start = () => {
  setInterval(() => {
    if (index === maxLenght - 1) index = 0;
    else index++;
    goToSlide(index);
    activateDots(index);
  }, speed);
};
start();

// startInterval();
// const startInterval = () => {
//   setInterval(() => {
//     index++;
//     updateContent();
//   }, speed);
// };
// updateContent();
// function updateContent() {
//   paragraphs.forEach((paragraph) => paragraph.classList.remove('active'));
//   // paragraphs[index].classList.add('active');
// }
//==================FAQ PAGE====================\\
const faqToggleBtn = document.querySelectorAll('.faq__heading');
const hiddenParagraph = document.querySelectorAll('.faq__paragraph');

for (const key in hiddenParagraph) {
  // console.log(key);
  faqToggleBtn.forEach((button) => {
    button.addEventListener('click', () => {
      hiddenParagraph.forEach((paragraph) => {
        if (!paragraph.classList.contains('visible__paragraph')) {
          paragraph.classList.add('visible__paragraph');
        }
      });
    });
  });
}

// faqToggleBtn.forEach((button) =>
//   // for (const key in hiddenParagraph){
//   //   button.addEventListener.
//   // }
//   // hiddenParagraph.forEach((paragraph) =>
//   //   button.addEventListener('click', () => {
//   //     // alert('hello');

//   //     if (!paragraph.classList.contains('visible__paragraph')) {
//   //       // hiddenParagraph.forEach((paragraph) =>
//   //       // );
//   //       paragraph.classList.remove('visible__paragraph');
//   //       paragraph.classList.add('visible__paragraph');
//   //       // hiddenParagraph.classList.remove('visible__paragraph');
//   //       // hiddenParagraph.classList.add('visible__paragraph');
//   //     } else {
//   //       paragraph.classList.remove('visible__paragraph');
//   //     }
//   //   })
//   // )
// );

// const valueDisplay = document.querySelectorAll('.counting__value');
// const slides = document.querySelectorAll('.slide');
// const slider = document.querySelector('.slider');
// const dotContainer = document.querySelector('.dots');
// const header = document.querySelector('header');
// const year = document.getElementById('year');

// let currentSlide = 0;
// let interval = 500;
// let slideInterval = 5000;

// //Sticky nav bar
// const stickyNav = (entries) => {
//   const [entry] = entries;

//   if (!entry.isIntersecting) header.classList.toggle('sticky__nav');
//   // else header.classList.remove("sticky__nav");
// };

// const stickyOptions = {
//   root: null,
//   threshold: 0.2,
//   // rootMargin: "-100px",
// };

// const headerObserver = new IntersectionObserver(stickyNav, stickyOptions);
// headerObserver.observe(header);

// //Dynamic footer copyright date
// let getDate = new Date().getFullYear();
// year.textContent = getDate;

// // valueDisplay.forEach((value) => {
// //   let start = 0;
// //   let end = Number(value.getAttribute("data-val"));

// //   let duration = Math.floor(interval / end);
// //   let counter = setInterval(function () {
// //     start += 1;
// //     value.textContent = start;
// //     if (start === end) {
// //       clearInterval(counter);
// //     }
// //   }, duration);
// // });

// valueDisplay.forEach((value) => {
//   const updateData = function () {
//     const target = Number(value.getAttribute('data-val'));
//     const count = Number(value.innerHTML);
//     let inc = target / interval;
//     if (count < target) {
//       value.innerText = Math.floor(inc + count);
//       setTimeout(updateData, 1);
//     } else {
//       value.innerText = target;
//     }
//   };
//   updateData();
// });

// //Slider
// const createDots = () => {
//   slides.forEach((_, i) => {
//     dotContainer.insertAdjacentHTML(
//       'beforeend',
//       `<button class='dots__dot' data-slide='${i}'></button>`
//     );
//   });
// };

// createDots();

// const activeDot = function (slide) {
//   document
//     .querySelectorAll('.dots__dot')
//     .forEach((dot) => dot.classList.remove('dots__dot--active'));
//   document
//     .querySelector(`.dots__dot[data-slide='${slide}'`)
//     .classList.add('dots__dot--active');
// };
// activeDot(0);
// const goToSlide = (slide) => {
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//   );
// };
// goToSlide(0);

// const startSlide = () => {
//   setInterval(() => {
//     if (currentSlide === slides.length - 1) {
//       currentSlide = 0;
//     } else {
//       currentSlide++;
//     }
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
//     );
//     activeDot(currentSlide);
//   }, slideInterval);
// };

// dotContainer.addEventListener('click', (e) => {
//   if (e.target.classList.contains('dots__dot')) {
//     const { slide } = e.target.dataset;
//     goToSlide(slide);
//   }
// });

// startSlide();
