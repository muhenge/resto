import headerLayout from "./layout/header";
import home from "./layout/home";
import menu from "./layout/menu";

headerLayout();

const homeInit = home();
// const tabs = document.querySelectorAll(".my-tabs .tabs li");
// const sections = document.querySelectorAll(".my-tabs .tab-content");

// tabs.forEach(tab => {
//   tab.addEventListener("click", e => {
//     e.preventDefault();
//     removeActiveTab();
//     addActiveTab(tab);
//   });
// })

// const removeActiveTab = () => {
//   tabs.forEach(tab => {
//     tab.classList.remove("d-none");
//   });
//   sections.forEach(section => {
//     section.classList.remove("d-none");
//   });
// }

// const addActiveTab = tab => {
//   tab.classList.add("d-none");
//   const href = tab.querySelector("a").getAttribute("href");
//   const matchingSection = document.querySelector(href);
//   matchingSection.classList.add("d-none");
// }
// const content = document.getElementById("content");

// const main = document.getElementById('main-id');
// const menuInit = menu();

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
        location.href = '#main-id';
      };
      break;
    case 'menu':
      document.getElementById('main-id').classList.add('d-none');
      document.getElementById('main-menu').classList.remove('d-none');
      document.getElementById('menu').onclick = () => {
        location.href = '#main-menu';
      };
      break;

    // eslint-disable-next-line no-fallthrough
    default:
      homepage();
  }

  e.stopPropagation();

}

document.addEventListener('click', fun, false);



// document.addEventListener('click', (e) => {
//     if(e.target.id === 'menu') menupage();


//     if(e.target.id === 'home') console.log('once');

//     e.stopPropagation();
// },false);

