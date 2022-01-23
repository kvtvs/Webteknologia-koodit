import FazerLunchMenuFi from '../assets/fazer-day-example_fi.json';

const coursesFi = [];

const parseFazerMenu = (menu) => {
    const courses = Object.values(menu);
    for (const course of courses){
        coursesFi.push(course.LunchMenus.SetMenus.Meals.Name);
    }
};

parseFazerMenu(FazerLunchMenuFi.courses);

const FazerData = {coursesFi};
export default FazerData;
