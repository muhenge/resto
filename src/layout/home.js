// import { container } from 'webpack';

const home = () => {
  const sectionTop = () => {
    const section = document.createElement('section');
    const itemHome = document.createElement('div');
    const containerHome = document.createElement('div');
    const headerContent = document.createElement('div');
    const headerHome = document.createElement('h1');
    const paraHome = document.createElement('p');

    section.classList.add('section-one');

    itemHome.classList.add('item');
    containerHome.classList.add('container');
    headerContent.classList.add('header-content');
    headerHome.classList.add('header-title');

    headerHome.innerText = 'BEST FOOD';
    paraHome.classList.add('header-sub-title');
    paraHome.innerText = 'create your own slogan';
    headerContent.appendChild(headerHome);
    headerContent.appendChild(paraHome);
    containerHome.appendChild(headerContent);
    itemHome.appendChild(containerHome);
    section.appendChild(itemHome);
    document.getElementById('content').appendChild(section);
  };

  const sectionSecond = () => {
    const imgClasses = 'mg-responsive section-icon hidden-sm hidden-xs'.split(' ');
    const rowTableClasses = 'row dis-table'.split(' ');
    const hiddenClasses = 'hidden-xs col-sm-6 section-bg about-bg dis-table-cell'.split(' ');
    const textTableClasses = 'col-xs-12 col-sm-6 dis-table-cell'.split(' ');
    const sectionSec = document.createElement('section');
    sectionSec.classList.add('about');
    sectionSec.setAttribute('id', 'about');
    const wrapper = document.createElement('div');
    const rowTable = document.createElement('div');
    const hidden = document.createElement('div');
    const textTable = document.createElement('div');
    const textContainer = document.createElement('div');
    const headerContainer = document.createElement('h2');
    headerContainer.classList.add('section-content-title');
    headerContainer.innerText = 'Awesome Foods';
    textContainer.classList.add('section-content');
    textTable.classList.add(...textTableClasses);

    rowTable.classList.add(...rowTableClasses);
    hidden.classList.add(...hiddenClasses);
    wrapper.classList.add('wrapper');
    const containerSecSection = document.createElement('div');
    containerSecSection.classList.add('container-fluid');
    textTable.appendChild(textContainer);
    rowTable.appendChild(hidden);
    rowTable.appendChild(textTable);
    textTable.appendChild(textContainer);
    textContainer.appendChild(headerContainer);
    containerSecSection.appendChild(rowTable);
    wrapper.appendChild(containerSecSection);

    const imgSection = document.createElement('img');
    imgSection.classList.add(...imgClasses);
    sectionSec.appendChild(imgSection);
    sectionSec.appendChild(wrapper);
    document.getElementById('content').appendChild(sectionSec);
  };

  return { sectionTop, sectionSecond };
};

export default home;
