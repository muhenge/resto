// import { container } from "webpack";


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
        paraHome.innerText = 'create your own slogan'
        // containerHome.appendChild(headerContent);
        headerContent.appendChild(headerHome)
        headerContent.appendChild(paraHome);
        containerHome.appendChild(headerContent);
        itemHome.appendChild(containerHome)
        section.appendChild(itemHome)
        content.appendChild(section);
    }

    const sectionSecond = ()=> {
        const imgClasses = 'mg-responsive section-icon hidden-sm hidden-xs'.split(' ',)
        const sectionSec = document.createElement('section');
        const wrapper = document.createElement('div')
        wrapper.classList.add('wrapper');
        const containerSecSection = document.createElement('div');
        containerSecSection.classList.add('container-fluid');
        wrapper.appendChild(containerSecSection);
        
        
        const imgSection = document.createElement('img');
        imgSection.classList.add(...imgClasses);
        sectionSec.appendChild(imgSection)
        sectionSec.appendChild(wrapper)
        content.appendChild(sectionSec);
    }

    return {sectionTop, sectionSecond}
}

export default home;