'use strict';

const coursesEn = ["Hamburger, cream sauce and boiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lounaspatonki kalkkunatäytteellä",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];


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
    change_text.innerHTML = coursesFi;
  }
  else if (languageOn.innerHTML == 'EN'){
    change_text.classList.add('en');
    change_text.classList.remove('fi');
    change_text.innerHTML = coursesEn;
  }
};


asc.addEventListener('click', () => {
  sort();
});

desc.addEventListener('click', () => {
  reverse();
});

const sort = () => {
  if (change_text.innerHTML == coursesFi){
    coursesFi.sort();
  document.getElementById('text').innerHTML = coursesFi;
  } else if (change_text.innerHTML == coursesEn){
    coursesEn.sort();
  document.getElementById('text').innerHTML = coursesEn;
  }
};

const reverse = () => {
  if (change_text.innerHTML == coursesFi){
    coursesFi.reverse();
  document.getElementById('text').innerHTML = coursesFi;
  } else if (change_text.innerHTML == coursesEn){
    coursesEn.reverse();
  document.getElementById('text').innerHTML = coursesEn;
  }
};

random.addEventListener('click', () => {
  if (change_text.innerHTML == coursesFi){
    const randomFood = coursesFi[Math.floor(Math.random() * coursesFi.length)];
    document.getElementById('text').innerHTML = randomFood;
  } else if (change_text.innerHTML == coursesEn){
    const randomFood = coursesEn[Math.floor(Math.random() * coursesEn.length)];
    document.getElementById('text').innerHTML = randomFood;
    }
});

