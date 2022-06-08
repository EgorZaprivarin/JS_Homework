var container = document.getElementById('container');

var firstPar = document.createElement('p'),
   secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.getElementsByTagName('button')[0];

var linksFirstPar = firstPar.children;

button.addEventListener('click', function () {
   for (var i = 0; i < linksFirstPar.length; i++) {
      var linkFirstPar = linksFirstPar[i];

      linkFirstPar.classList.toggle('changed');
   };
});

var linksSecondPar = secondPar.children;

secondPar.onclick = function () {
   var target = event.target;

   if (target.tagName === 'A') {
      event.preventDefault();

      if (localStorage.getItem(target.textContent) === null) {
         localStorage.setItem(target.textContent, JSON.stringify({ path: target.href }));
         target.href = '#';
         alert('Информация о ссылке сохранена.');
      } else {
         alert(JSON.parse(localStorage.getItem(target.textContent)).path);
      };
   };
};

window.addEventListener('load', function () {
   localStorage.clear();
});