// import SodexoLunchMenu from './sodexo-day-example.json';
// console.log(SodexoLunchMenu);

const dataUrlFi = 'https://www.sodexo.fi/ruokalistat/output/daily_json/152/2022-02-07';
// const coursesFi = [];

/**
 * Extract course titles from Sodexo menu JSON object
 *
 * @param {string} menu - JSON Menu to be parsed
 */
const parseSodexoMenu = (menu) => {
  const courses = Object.values(menu);
  for (const course of courses) {
    dataUrlFi.push(course.title_en);
    //coursesFi.push(course.title_fi);
  }
};
parseSodexoMenu(SodexoLunchMenu.courses);

const SodexoData = {parseSodexoMenu, dataUrlFi};
export default SodexoData;