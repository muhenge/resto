
const menu = () => {
  const mainMenu = document.createElement('main');
  mainMenu.setAttribute('id','main-menu');
  const content = document.getElementById('content');
  content.appendChild(mainMenu);
  const div = document.createElement('div');
  div.classList.add('menu-div');
  mainMenu.appendChild(div);
};

export default menu;
