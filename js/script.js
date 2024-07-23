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
