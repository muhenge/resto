import headerLayout from "./layout/header";
import home from "./layout/home";
import menu from "./layout/menu";

headerLayout();

const homeInit = home();



const content = document.getElementById("content");

const main = document.getElementById('main-id');


const homepage = () => {
  homeInit.sectionTop();
  homeInit.sectionSecond();
  homeInit.sectionPlace();
};

homepage();



const fun = (e)=> {
    if (e.target.id==='menu') menu();
    if(e.target.id === 'home') homepage();
    
    e.stopPropagation();
}

document.addEventListener('click', fun , false);



// document.addEventListener('click', (e) => {
//     if(e.target.id === 'menu') menupage();


//     if(e.target.id === 'home') console.log('once');

//     e.stopPropagation();
// },false);


// document.getElementById('home').onclick=()=>{
// location.href = 'https://ngenziherve.me';
// }
