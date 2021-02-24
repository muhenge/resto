const contactForm = () => {
  const mainContact = document.createElement('main');
  mainContact.setAttribute('id', 'main-contact');
  mainContact.classList.add('main-contact');
  const section = document.createElement('section');
  section.classList.add('contact-form', 'menu-div');
  const container = document.createElement('div');
  container.classList.add('container');
  const row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);
  const col = document.createElement('div');
  const colClasses = 'col-lg-6 col-md-6 mt-5'.split(' ');
  col.classList.add(...colClasses);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 2; i++) {
    row.appendChild(col.cloneNode(true));
  }

  const h3 = document.createElement('div');
  h3.innerText = 'About Us';
  const para = document.createElement('p');
  para.innerText = 'Integer cursus scelerisque ipsum id efficitur. Donec a dui fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac lectus a interdum. Vivamus semper posuere dui. Integer cursus scelerisque ipsum id efficitur. Donec a dui fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac lectus a interdum. Vivamus semper posuere dui.';
  col.appendChild(h3);
  col.appendChild(para);
  row.firstChild.appendChild(h3);
  row.firstChild.appendChild(para);
  section.appendChild(container);
  mainContact.appendChild(section);
  document.getElementById('content').appendChild(mainContact);
};

export default contactForm;
