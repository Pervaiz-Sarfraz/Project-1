burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
logo = document.querySelector('.logo');



 burger.addEventListener('click',()=>{
navlist.classList.toggle('v-resp-nav')
logo.classList.toggle('v-resp-nav')
navbar.classList.toggle('h-resp-nav')
});
