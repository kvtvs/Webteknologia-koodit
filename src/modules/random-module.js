import {coursesFi, coursesEn} from './sodexo-data';
import {finnish} from './language-module';

const RandomCourse = () => {
    const random = Math.floor(Math.random() * coursesFi.length);
    if (finnish) {
        alert(coursesFi[random]);
    } else {
        alert(coursesEn[random]);
    }
};

export {RandomCourse};