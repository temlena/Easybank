const navigationBar = document.querySelector(".navbar");
const hamburgerIcon = document.querySelector ('.navbar__link-toggle');
hamburgerIcon.addEventListener('click', ()=>{
  navigationBar.classList.toggle('active')
})
