
const menu = () => {
  const colClasses = 'col-sm-12 col-md-4 col-lg-4'.split(' ');
  const mainMenu = document.createElement('main');
  mainMenu.setAttribute('id', 'main-menu');
  const content = document.getElementById('content');
  content.appendChild(mainMenu);

  const galleryContainer = document.createElement('div');
  galleryContainer.classList.add('container-fluid','tz-gallery');

  const row = document.createElement('div');
  row.classList.add('row');
  galleryContainer.appendChild(row);
  const col = document.createElement('div');
  col.classList.add(...colClasses);

  const image = document.createElement('img');
  image.classList.add('img-fluid');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= 8; i++) {
    row.appendChild(col.cloneNode(true));
    col.appendChild(image);
  }

  const f = row.firstChild;
  f.appendChild(image);
  row.children[0].firstChild.setAttribute('src', './images/food7.jpg');
  row.children[1].firstChild.setAttribute('src', './images/food1.jpg');
  row.children[2].firstChild.setAttribute('src', './images/food2.jpg');
  row.children[3].firstChild.setAttribute('src', './images/food3.jpg');
  row.children[4].firstChild.setAttribute('src', './images/food4.jpg');
  row.children[5].firstChild.setAttribute('src', './images/food5.jpg');
  row.children[6].firstChild.setAttribute('src', './images/food6.jpg');
  row.children[7].firstChild.setAttribute('src', './images/food7.jpg');
  row.children[8].firstChild.setAttribute('src', './images/food8.jpg');
  mainMenu.appendChild(galleryContainer);
};

export default menu;
