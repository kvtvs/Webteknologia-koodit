// import SodexoLunchMenu from '../assets/sodexo-day-example.json';
// console.log(SodexoLunchMenu);

const dataUrlFi = 'https://www.sodexo.fi/ruokalistat/output/daily_json/152/2022-02-07';
// const coursesFi = [];

/**
 * Extract course titles from Sodexo menu JSON object
 *
 * @param {string} menu - JSON Menu to be parsed
 */
 const parseDayMenu = (lunchMenus, dayOfWeek) => {
  const dayMenu = lunchMenus[dayOfWeek].SetMenus.map(setMenu => {
    const name = setMenu.Name;
    let meals = '';
    // TODO: clean output
    for (const meal of setMenu.Meals) {
      meals += meal.Name + ', ';
    }
    return  name ? name + ': ' + meals : meals;
  });
  return dayMenu;
};

const SodexoData = {parseDayMenu, dataUrlFi};
export default SodexoData;



