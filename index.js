const navBar = document.querySelector('.icon-menu');
const navList = document.querySelector('.nav-lists');
const lists = document.querySelectorAll('.nav-list');
const links = document.querySelectorAll('.nav-link');
const boldSpan = document.querySelector('.bold-span');
const reward= document.querySelectorAll('.inner-link');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal-box')

function mobileNav(){
    navBar.classList.add('hide')
    navList.style.height ='100vh';
    navList.style.width ='100vw';
    navList.style.backgroundColor = "white";
    navList.style.display = "block";

    for(let i = 0; i< lists.length; i++){
        lists[i].style.listStyle = "none";
        lists[i].style.padding= "1.5rem 1rem 0";
    }

    for(let i = 0; i< links.length; i++){
        links[i].style.textDecoration = "none";
        links[i].style.color = "black";
      }
     boldSpan.classList.remove('hide');
}

navBar.addEventListener('click', mobileNav);

boldSpan.addEventListener('click', function(){
    navList.classList.toggle('hide');
}
);

closeBtn.addEventListener('click', function(){
    modal.classList.add('hide')
});

for (let i = 0; i < reward.length; i++ ){
reward[i].addEventListener('click', function(){
    modal.classList.remove('hide')
});
};