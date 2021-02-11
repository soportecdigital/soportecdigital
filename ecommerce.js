// console.log('holaa');
//INICIO - SCROLL
window.addEventListener('scroll',()=>{
  let header0012 = document.querySelector('header');
  header0012.classList.toggle('sticky', window.scrollY > 0);
});
//FINAL - SCROLL
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click',()=>{
      nav.classList.toggle('show');
    })
  }
}
showMenu('nav_toggle','nav_menu');

// REMOVE MENU MOVILE
const navLink=document.querySelector('.nav_link');
function linkAction(){
  // Active link
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  // REMOVE MENU MOVILE
  const navMenu= document.remove('show');
}
navLink.forEach(n => n.addEventListener('click',linkAction))
//FUNCION mover
let toggle2 = document.querySelector('.nav_menu');
let menu2 = document.querySelector('nav_list');
function mover(){
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
}
