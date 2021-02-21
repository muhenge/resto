
const menu = () => {
  const elt = document.createElement('section');
  elt.classList.add('section-menu');
  elt.textContent = "hello there!"
  const main = document.getElementById('main-id');
  main.appendChild(elt);
  document.getElementById('content').appendChild(main);
};

export default menu;
