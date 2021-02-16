
const headerLayout = () => {
    const head = () => {
        const navClasses = 'navbar navbar-expand-lg navbar-light bg-light'.split(' ',)
        const navCollapseClasses = 'collapse navbar-collapse'.split(' ',);
        const ulClasses = 'collapse navbar-collapse'.split(' ',);
        const aClasses = 'nav-link dropdown-toggle'.split(' ',);
        

        const header = document.createElement('header');
        const nav = document.createElement('nav');
        const navContainer = document.createElement('div');
        const navCollapse = document.createElement('div');
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const anchorHome = document.createElement('a');
        
        header.classList.add = ('top-navbar');
        nav.classList.add(...navClasses);
        navContainer.classList.add('container');
        navCollapse.classList.add(...navCollapseClasses);
        navContainer.appendChild(navCollapse);
        ul.classList.add(...ulClasses);
        li.classList.add('nav-item');
        anchorHome.classList.add(...aClasses)
        anchorHome.textContent = 'Home'
        anchorHome.setAttribute('id','home');
        li.appendChild(anchorHome);

        

        ul.appendChild(li);
        navCollapse.appendChild(ul);
        nav.appendChild(navContainer);
        header.appendChild(nav);

        document.getElementById('content').appendChild(header);
    } 

    const homeContent =()=>{
        const contents = document.createElement('div');
        contents.classList.add('container');
        document.getElementById('content').appendChild(contents);
    }

    return { head }
}



export default headerLayout