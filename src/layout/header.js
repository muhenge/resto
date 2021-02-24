const content = document.getElementById('content');
content.classList.add('my-tabs');
const headerLayout = () => {
  const navClasses = 'navbar navbar-expand-lg navbar-light bg-light fixed-top'.split(' ');
  const navCollapseClasses = 'collapse navbar-collapse'.split(' ');
  const ulClasses = 'navbar-nav ml-auto'.split(' ');

  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const navContainer = document.createElement('div');
  const navCollapse = document.createElement('div');
  const ul = document.createElement('ul');

  const liHome = document.createElement('li');
  const liMenu = document.createElement('li');
  const liContact = document.createElement('li');

  const anchorHome = document.createElement('a');
  const anchorMenu = document.createElement('a');
  const anchorContact = document.createElement('a');

  header.classList.add = 'top-navbar';
  nav.classList.add(...navClasses);
  navContainer.classList.add('container');
  navCollapse.classList.add(...navCollapseClasses);
  navContainer.appendChild(navCollapse);
  ul.classList.add(...ulClasses);
  liHome.classList.add('nav-item', 'cursor');
  liMenu.classList.add('nav-item', 'cursor');
  liContact.classList.add('nav-item', 'cursor');

  anchorHome.classList.add('nav-link', 'cursor');
  anchorHome.setAttribute('id', 'home');
  anchorMenu.classList.add('nav-link', 'cursor');
  anchorMenu.setAttribute('id', 'menu');
  anchorContact.classList.add('nav-link', 'cursor');
  anchorContact.setAttribute('id', 'contact');
  anchorHome.textContent = 'Home';
  anchorMenu.textContent = 'Menu';
  anchorContact.textContent = 'Contact';

  anchorHome.setAttribute('id', 'home');

  liHome.appendChild(anchorHome);
  liMenu.appendChild(anchorMenu);
  liContact.appendChild(anchorContact);

  ul.appendChild(liHome);
  ul.appendChild(liMenu);
  ul.appendChild(liContact);

  navCollapse.appendChild(ul);
  nav.appendChild(navContainer);
  header.appendChild(nav);

  content.appendChild(header);
};

export default headerLayout;
