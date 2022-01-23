import SodexoData from './modules/sodexo-data';
import FazerData from './modules/sodexo-data';

let language = 'fi';
let currentMenu1 = SodexoData.coursesFi;
let currentMenu2 = FazerData.coursesFi;

/**
 * Renders menu courses on page
 */
const renderMenu = () => {
  const ulElement1 = document.querySelector('#sodexo');
  ulElement1.innerHTML = '';
  const ulElement2 = document.querySelector('#fazer');
  ulElement2.innerHTML = '';
  for (const item of currentMenu1) {
    const listElement = document.createElement('li');
    listElement.textContent = item;
    ulElement1.appendChild(listElement);
  }
  for (const item of currentMenu2) {
    const listElement = document.createElement('li');
    listElement.textContent = item;
    ulElement2.appendChild(listElement);
  }
};

/**
 * Toggle between en/fi
 */
const switchLanguage = () => {
  if (language === 'fi') {
    language = 'en';
    currentMenu1 = SodexoData.coursesEn;
  } else {
    language = 'fi';
    currentMenu1 = SodexoData.coursesFi;
  }
};

/**
 * Sort courses alphapetically
 *
 * @param {Array} courses menu array
 * @param {string} order 'asc'/'desc'
 * @returns {Array} sorted menu
 */
const sortCourses = (courses, order = 'asc') => {
  const sortedCourses = courses.sort();
  if (order === 'desc') {
    sortedCourses.reverse();
  }
  return sortedCourses;
};

/**
 * Picks a random dish
 *
 * @param {Array} courses menu
 * @returns {string} random dish
 */
const pickARandomCourse = courses => {
  const randomIndex = Math.floor(Math.random() * courses.length);
  return courses[randomIndex];
};

/**
 * Initialize application
 */
const init = () => {
  renderMenu();
  // Event listeners for buttons
  document.querySelector('#switch-lang').addEventListener('click', () => {
    switchLanguage();
    renderMenu();
  });
  document.querySelector('#pick-random').addEventListener('click', () => {
    // choose random dish & display it
    alert(pickARandomCourse(currentMenu1));

  });
  document.querySelector('#sort-menu').addEventListener('click', () => {
    // currentMenu = sortCourses(currentMenu);
    currentMenu1 = sortCourses(currentMenu1, 'desc');
    renderMenu();
  });
};
init();