import headerLayout from './layout/header';
import home from './layout/home';
import menu from './layout/menu';

headerLayout();

const homeInit = home();

const homepage = () => {
  homeInit.sectionTop();
  homeInit.sectionSecond();
  homeInit.sectionPlace();
};

homepage();
menu();

const fun = (e) => {
  const selected = e.target.id;
  switch (selected) {
    case 'home':
      document.getElementById('main-menu').classList.add('d-none');
      document.getElementById('main-id').classList.remove('d-none');
      document.getElementById('home').onclick = () => {
        // eslint-disable-next-line no-restricted-globals
        location.href = '#main-id';
      };
      break;
    case 'menu':
      document.getElementById('main-id').classList.add('d-none');
      document.getElementById('main-menu').classList.remove('d-none');
      document.getElementById('menu').onclick = () => {
        // eslint-disable-next-line no-restricted-globals
        location.href = '#main-menu';
      };
      break;

    // eslint-disable-next-line no-fallthrough
    default:
      homepage();
  }

  e.stopPropagation();
};

document.addEventListener('click', fun, false);
