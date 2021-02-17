import headerLayout from './layout/header';
import home from './layout/home';

const headInit = headerLayout();
const homeInit = home();

headInit.head();
homeInit.sectionTop();
homeInit.sectionSecond();
homeInit.sectionPlace();
