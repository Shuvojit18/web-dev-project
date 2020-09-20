//Getting the menu burger and saving it
burger = document.querySelector('.burger')
//Navigation bar
navbar = document.querySelector('.navbar')
//Search bar and search button
rightNav = document.querySelector('.rightNav')
//Navigation lists
navlist = document.querySelector('.nav-list')

//Onclick toggling their display properties
burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('v-class');
    rightNav.classList.toggle('v-class');
    
})