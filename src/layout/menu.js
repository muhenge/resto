
const menu = () => {
  const rowInColRowClasses = 'col-md-3 col-sm-6 col-xs-12'.split(' ');
  const colClasses = 'col-md-10 col-md-offset-1 col-sm-9 col-sm-offset-2 col-xs-12'.split(' ');
  const mainMenu = document.createElement('main');
  mainMenu.setAttribute('id','main-menu');
  const content = document.getElementById('content');
  content.appendChild(mainMenu);
  const sectionMenu = document.createElement('section');
  sectionMenu.classList.add('menu-list');
  const containerMenu = document.createElement('div');
  containerMenu.classList.add('container');
  const row = document.createElement('div');
  row.classList.add('row', 'menu');
  containerMenu.appendChild(row);
  const col = document.createElement('div');
  col.classList.add(...colClasses);
  row.appendChild(col);
  const rowInCol = document.createElement('div');
  rowInCol.classList.add('row');
  col.appendChild(rowInCol);
  const rowInColRow = document.createElement('div');
  rowInColRow.classList.add(...rowInColRowClasses);
  rowInCol.appendChild(rowInColRow);
  const item = document.createElement('div');
  item.classList.add('row');
  rowInColRow.appendChild(item);
  const cat = document.createElement('div');
  cat.classList.add('menu-category');
  item.appendChild(cat);
  const h2 = document.createElement('h2');
  h2.innerText = 'Bread';
  cat.appendChild(h2);
  sectionMenu.appendChild(containerMenu);

  mainMenu.appendChild(sectionMenu);
};

export default menu;
