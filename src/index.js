'use strict';

import LunchMenu from '../sodexo-day-example.json';
console.log(LunchMenu);
let itemEN;
let itemFI;
const coursesFI = [];
const coursesEN = [];

for (let i = 1; i <= 9; i++){
  coursesFI.push(LunchMenu.courses[i].title_fi);
  console.log(coursesFI);

  coursesEN.push(LunchMenu.courses[i].title_en);
  console.log(coursesEN);
};

const fi = document.getElementById('fi_click');
const en = document.getElementById('en_click');
const asc = document.getElementById('asc');
const desc = document.getElementById('desc');
const random = document.getElementById('random');
const change_text = document.getElementById('text');

fi.addEventListener('click', () => {
  language(fi,en);
}, false);

en.addEventListener('click', () => {
  language(en,fi);
}, false);


const language = (languageOn, languageOff) => {
  if (!languageOn.classList.contains('current_lang')){
    languageOn.classList.add('current_lang');
    languageOff.classList.remove('current_lang');
  }
  if (languageOn.innerHTML == 'FI'){
    change_text.classList.add('fi');
    change_text.classList.remove('en');
    change_text.innerHTML = coursesFI;
  }
  else if (languageOn.innerHTML == 'EN'){
    change_text.classList.add('en');
    change_text.classList.remove('fi');
    change_text.innerHTML = coursesEN;
  }
};


asc.addEventListener('click', () => {
  sort();
});

desc.addEventListener('click', () => {
  reverse();
});

const sort = () => {
  if (change_text.innerHTML == coursesFI){
    coursesFI.sort();
  document.getElementById('text').innerHTML = coursesFI;
  } else if (change_text.innerHTML == coursesEN){
    coursesEN.sort();
  document.getElementById('text').innerHTML = coursesEN;
  }
};

const reverse = () => {
  if (change_text.innerHTML == coursesFI){
    coursesFI.reverse();
  document.getElementById('text').innerHTML = coursesFI;
  } else if (change_text.innerHTML == coursesEN){
    coursesEN.reverse();
  document.getElementById('text').innerHTML = coursesEN;
  }
};

random.addEventListener('click', () => {
  if (change_text.innerHTML == coursesFI){
    const randomFood = coursesFI[Math.floor(Math.random() * coursesFI.length)];
    document.getElementById('text').innerHTML = randomFood;
  } else if (change_text.innerHTML == coursesEN){
    const randomFood = coursesEN[Math.floor(Math.random() * coursesEN.length)];
    document.getElementById('text').innerHTML = randomFood;
    }
});
