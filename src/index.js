import headerLayout from './layout/header';
import home from './layout/home';
import menu from './layout/menu';
import contactForm from './layout/contact';

headerLayout();

const homeInit = home();

const homepage = () => {
  homeInit.sectionTop();
  homeInit.sectionSecond();
  homeInit.sectionPlace();
};

homepage();
menu();
contactForm();

const fun = (e) => {
  e.preventDefault();

  const selected = e.target.id;
  switch (selected) {
    case 'home':
      document.getElementById('main-menu').classList.add('d-none');
      document.getElementById('main-id').classList.remove('d-none');
      document.getElementById('main-contact').classList.add('d-none');
      document.getElementById('home').onclick = () => {
        // eslint-disable-next-line no-restricted-globals
        location.href = '#main-id';
      };
      break;
    case 'menu':
      document.getElementById('main-id').classList.add('d-none');
      document.getElementById('main-menu').classList.remove('d-none');
      document.getElementById('main-contact').classList.add('d-none');
      document.getElementById('menu').onclick = () => {
        // eslint-disable-next-line no-restricted-globals
        location.href = '#main-menu';
      };
      break;
    case 'contact':
      document.getElementById('main-contact').classList.remove('d-none');
      document.getElementById('main-menu').classList.add('d-none');
      document.getElementById('main-id').classList.add('d-none');
      document.getElementById('menu').onclick = () => {
        // eslint-disable-next-line no-restricted-globals
        location.href = '#main-menu';
      };
      break;

    // eslint-disable-next-line no-fallthrough
    default:
      document.removeEventListener('click');
      document.getElementById('main-id').classList.add('d-block');
      document.getElementById('main-menu').classList.add('d-none');
      document.getElementById('main-contact').classList.add('d-none');
  }

  e.stopPropagation();
};

document.addEventListener('click', fun, false);
