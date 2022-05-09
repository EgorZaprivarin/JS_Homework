

let burger = document.querySelectorAll('.burger');
let menu = document.querySelectorAll('.menu');

for (i = 0; i < burger.length; i++) {
   let thisBurger = burger[i];
   let thisMenu = menu[i];
   burger[i].addEventListener('click', function () {
      thisBurger.classList.toggle('active');
      thisMenu.classList.toggle('open');
   });
};

