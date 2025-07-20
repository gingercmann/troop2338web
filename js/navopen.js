const navIcon = document.querySelector('.navicon');
const navMenu = document.querySelector('.navmenu');

navIcon.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  document.body.classList.toggle('navmenu-open');
  document.documentElement.classList.toggle('navmenu-open');
});
