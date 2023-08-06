const show = document.querySelector('.show');
const view = document.querySelector('.view');

view.addEventListener('click', function(){
  show.type = "text"
})

show.addEventListener('click', function(){
    show.type= "password"
})