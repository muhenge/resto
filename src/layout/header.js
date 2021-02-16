const content = document.getElementById('content');

const headerLayout = () => {
  const head = () => {
    const navClasses = 'navbar navbar-expand-lg navbar-light bg-light'.split(' ');
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
    liHome.classList.add('nav-item');
    liMenu.classList.add('nav-item');
    liContact.classList.add('nav-item');

    anchorHome.classList.add('nav-link');
    anchorMenu.classList.add('nav-link');
    anchorContact.classList.add('nav-link');

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

  return { head };
};

export default headerLayout;
