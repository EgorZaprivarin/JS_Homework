var inputs = document.getElementsByTagName('input'),
   inputX = document.getElementById('first'),
   inputY = document.getElementById('second'),
   button = document.getElementsByTagName('button')[0],
   div = document.getElementsByTagName('div')[0];

button.disabled = true;

div.addEventListener('keyup', function () {
   if (inputX.value && inputY.value) {
      button.disabled = false;
   } else {
      button.disabled = true;
   };
});

var table = document.createElement('table');

table.setAttribute('border', '1px');

button.addEventListener('click', function () {
   if ((isNaN(+inputX.value) || +inputX.value < 1 || +inputX.value > 10) && (isNaN(+inputY.value) || +inputY.value < 1 || +inputY.value > 10)) {
      inputX.value = '';
      inputY.value = '';
      inputX.focus();
      button.disabled = true;
      alert('Введите корректное значение в поле X и Y - целое число от 1 до 10');
   } else if (isNaN(+inputX.value) || +inputX.value < 1 || +inputX.value > 10) {
      inputX.value = '';
      inputX.focus();
      button.disabled = true;
      alert('Введите корректное значение в поле X - целое число от 1 до 10');
   } else if (isNaN(+inputY.value) || +inputY.value < 1 || +inputY.value > 10) {
      inputY.value = '';
      inputY.focus();
      button.disabled = true;
      alert('Введите корректное значение в поле Y - целое число от 1 до 10');
   } else {
      var number = 0;

      table.innerHTML = '<table></table>';

      if (+inputX.value % 2 == 0) {
         for (var i = 0; i < +inputY.value; i++) {
            var tr = table.appendChild(document.createElement('tr'));

            for (var j = 0; j < +inputX.value; j++) {
               var td = document.createElement('td');

               td.classList.add('size');
               if (number % 2 == 0) {
                  td.classList.add('black');
                  tr.appendChild(td);
               } else {
                  tr.appendChild(td);
               };
               number++;
            };
            number++;
         };
      } else {
         for (var i = 0; i < +inputY.value; i++) {
            var tr = table.appendChild(document.createElement('tr'));

            for (var j = 0; j < +inputX.value; j++) {
               var td = document.createElement('td');

               td.classList.add('size');
               if (number % 2 == 0) {
                  td.classList.add('black');
                  tr.appendChild(td);
               } else {
                  tr.appendChild(td);
               };
               number++;
            };
         };
      };
      div.appendChild(table);
   };
});

table.addEventListener('click', function () {
   var target = event.target;

   if (target.tagName === 'TD') {
      var td = document.getElementsByTagName('td');

      for (var i = 0; i < td.length; i++) {
         td[i].classList.toggle('black');
      };
   }
});