const contactForm = () => {
  const mainContact = document.createElement('main');
  mainContact.setAttribute('id', 'main-contact');
  mainContact.classList.add('main-contact');
  const section = document.createElement('section');
  section.classList.add('contact-form', 'menu-div');
  const container = document.createElement('div');
  container.classList.add('container');

  section.appendChild(container);
  mainContact.appendChild(section);
  document.getElementById('content').appendChild(mainContact);
};

export default contactForm;
