import FazerLunchMenuFi from '../assets/fazer-day-example_fi.json';
import FazerLunchMenuEn from '../assets/fazer-day-example-en.json';

const parseFazerLunchMenuFi = () => {
    const LunchMenus = FazerLunchMenuFi.LunchMenus;

    for (let i = 0; i < LunchMenus.length; i++) {
        fazerCoursesFI.push({
        SetMenus: [],
      }); 
      for (let j = 0; j < LunchMenus[i].SetMenus.length; j++) {
         fazerCoursesFI[i].SetMenus.push({
          Name: LunchMenus[i].SetMenus[j].Name,
          Meals: [], 
        });
        for (let n = 0; n < LunchMenus[i].SetMenus[j].Meals.length; n++) {
             fazerCoursesFI[i].SetMenus[j].Meals.push(
              LunchMenus[i].SetMenus[j].Meals[n]
            );
            /* fazerCoursesFI.push(
                LunchMenus[i].SetMenus[j].Meals[n]
            ); */
        };
      }
    }
    console.log('fi menu' + fazerCoursesFI);
  }; 

  parseFazerLunchMenuFi();

  const parseFazerLunchMenuEn = () => {
    const LunchMenus = FazerLunchMenuEn.LunchMenus;

    for (let i = 0; i < LunchMenus.length; i++) {
        fazerCoursesEN.push({
        SetMenus: [],
      }); 
      for (let j = 0; j < LunchMenus[i].SetMenus.length; j++) {
         fazerCoursesEN[i].SetMenus.push({
          Name: LunchMenus[i].SetMenus[j].Name,
          Meals: [], 
        });
        for (let n = 0; n < LunchMenus[i].SetMenus[j].Meals.length; n++) {
             fazerCoursesEN[i].SetMenus[j].Meals.push(
              LunchMenus[i].SetMenus[j].Meals[n]
            );
            /* fazerCoursesEN.push(
                LunchMenus[i].SetMenus[j].Meals[n]
            ); */
        };
      }
    }
    console.log('en menu' + fazerCoursesEN);
  }; 

  parseFazerLunchMenuEn();

const FazerData = {fazerCoursesFI, fazerCoursesEN};
export default FazerData;
