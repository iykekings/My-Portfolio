// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

const projects = [
  {
    name: 'Obris Engineering',
    url: 'https://obrisengineering.com',
    imgUrl: './img/projects/obris.png',
    description:
      'Built with Angular, Angular Material, Firebase, Algolia Search and powered by a restful API',
    github: 'none',
    private: true
  },
  {
    name: 'DevEast',
    url: 'https://deveast.org',
    imgUrl: './img/projects/deveast.png',
    description: 'Built with WordPress, Sass, and Vanilla JavaSript',
    github: 'none',
    private: true
  },
  {
    name: 'StartUp South Restful API',
    url: 'https://cryptic-wave-94429.herokuapp.com',
    imgUrl: './img/projects/swagger.png',
    description:
      'An API end point for creating and querying events, built on Express and MongoDB',
    github: 'https://github.com/iykekings/StartUp-South-Rest-API',
    private: false
  },
  {
    name: 'Webscraping API',
    url: 'http://radiant-thicket-47823.herokuapp.com/oilandgas',
    imgUrl: './img/projects/radiant.png',
    description:
      'An API Endpoint for webscrapped news data With cron- job to run, refresh and store the news data in mongodb database built on Node, Node-cron and X-ray',
    github: 'https://github.com/iykekings/Webscraping-API',
    private: false
  },
  {
    name: 'BBVibrant',
    url: 'https://bbvirant.com',
    imgUrl: './img/projects/bbvibrant.png',
    description: 'Built with WordPress and Vanilla JavaScript',
    github: 'none',
    private: true
  }
];

// Add to projects

const projects$ = document.querySelector('.projects');
projects.forEach(item => {
  let item$ = document.createElement('div');
  item$.classList.add('working-item');
  // Image container
  const imageCon = document.createElement('a');
  imageCon.classList.add('img-con');
  let image = document.createElement('img');
  image.src = item.imgUrl;
  image.alt = item.name;
  imageCon.append(image);

  // Buttons
  let btnLight = document.createElement('a');
  btnLight.classList.add('btn-light');
  btnLight.href = item.url;
  btnLight.innerHTML = `<i class="fas fa-eye"></i> ${item.name}`;

  let btnDark = document.createElement('a');
  btnDark.classList.add('btn-dark');
  if (item.private) {
    btnDark.setAttribute('disabled', 'true');
    btnDark.href = '#';
  } else {
    btnDark.href = item.github;
  }
  btnDark.innerHTML = `<i class="fab fa-github"></i> Github`;

  // Overlay
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.innerHTML = `<p>${item.description}</p>`;

  // Add Up
  item$.append(imageCon, btnLight, btnDark, overlay);
  projects$.append(item$);

  // Toggle overlay
  const images = document.querySelectorAll('.img-con > img');
  images.forEach(img =>
    img.addEventListener('mouseenter', () => {
      img.parentElement.parentElement
        .querySelector('.overlay')
        .classList.toggle('active');
    })
  );
  const allOverlay = document.querySelectorAll('.working-item .overlay');
  allOverlay.forEach(ov =>
    ov.addEventListener('mouseleave', () => {
      ov.classList.toggle('active');
    })
  );
});
