
const home = () => {
  const main = document.createElement('main');
  main.setAttribute('id','main-id');

  const sectionTop = () => {
    const section = document.createElement('section');
    const itemHome = document.createElement('div');
    const containerHome = document.createElement('div');
    const headerContent = document.createElement('div');
    const headerHome = document.createElement('h1');
    const paraHome = document.createElement('p');

    section.classList.add('owl-carousel');
    section.setAttribute('id', 'header-slider');
    itemHome.classList.add('item');
    containerHome.classList.add('container');
    headerContent.classList.add('header-content');
    headerHome.classList.add('header-title');

    headerHome.innerText = 'WELCOME';
    paraHome.classList.add('header-sub-title');
    paraHome.innerText = 'find the best food';
    headerContent.appendChild(headerHome);
    headerContent.appendChild(paraHome);
    containerHome.appendChild(headerContent);
    itemHome.appendChild(containerHome);
    section.appendChild(itemHome);
    document.getElementById('content').appendChild(main);
    main.appendChild(section);
  };

  const sectionSecond = () => {
    const imgClasses = 'img-responsive section-icon hidden-sm hidden-xs'.split(' ');
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
    const paraOne = document.createElement('p');
    const paraTwo = document.createElement('p');
    paraOne.classList.add('section-content-para');
    paraTwo.classList.add('section-content-para');
    paraOne.innerText = 'Astronomy compels the soul to look upward, and leads us from this world to another.  Curious that we spend more time congratulating people who have succeeded than encouraging people who have not. As we got further and further away, it [the Earth] diminished in size.';
    headerContainer.classList.add('section-content-title');
    headerContainer.innerText = 'About';
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
    textContainer.appendChild(paraOne);
    textContainer.appendChild(paraTwo);
    containerSecSection.appendChild(rowTable);
    wrapper.appendChild(containerSecSection);

    const imgSection = document.createElement('img');
    imgSection.classList.add(...imgClasses);
    sectionSec.appendChild(imgSection);
    sectionSec.appendChild(wrapper);
    document.getElementById('content').appendChild(main);
    main.appendChild(sectionSec);
  };

  const sectionPlace = () => {
    const placeColBgClasses = 'col-xs-6 col-sm-6 dis-table-cell section-bg'.split(' ');
    const placeColClasses = 'col-xs-6 col-sm-6 dis-table-cell color-bg'.split(' ');
    const imgPlaceClasses = 'img-responsive section-icon hidden-sm hidden-xs'.split(' ');
    const sectionP = document.createElement('section');
    sectionP.classList.add('great-place-to-enjoy');
    sectionP.setAttribute('id', 'great-place-to-enjoy');
    const imgPlace = document.createElement('img');
    imgPlace.setAttribute('src', 'images/icons/beer_black.png');
    imgPlace.classList.add(...imgPlaceClasses);
    const placeContainer = document.createElement('div');
    placeContainer.classList.add('container-fluid');
    const placeRow = document.createElement('div');
    const placeCol = document.createElement('div');
    placeCol.classList.add(...placeColClasses);
    placeRow.appendChild(placeCol);
    const headerPlace = document.createElement('h2');
    headerPlace.classList.add('section-title');
    headerPlace.innerText = 'Great Place to enjoy';
    placeCol.appendChild(headerPlace);
    const placeColBg = document.createElement('div');
    placeColBg.classList.add(...placeColBgClasses);
    placeRow.appendChild(placeColBg);
    placeRow.classList.add('row', 'dis-table');
    placeContainer.appendChild(placeRow);
    sectionP.appendChild(imgPlace);
    sectionP.appendChild(placeContainer);

    document.getElementById('content').appendChild(main);
    main.appendChild(sectionP);
  };
  return { sectionTop, sectionSecond, sectionPlace };
};

export default home;
