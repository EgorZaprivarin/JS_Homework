var table = document.getElementsByTagName('table')[0],
   tbody = table.firstElementChild,
   addRow = document.getElementsByTagName('td')[9],
   rows = document.getElementsByTagName('tr'),
   newRow = document.createElement('tr');

newRow.innerHTML = '<tr><td></td><td></td><td></td></tr>';

addRow.addEventListener('click', function () {
   tbody.insertBefore(newRow.cloneNode(true), rows[0]);
});

var input = document.createElement('input'),
   tdArr = document.getElementsByTagName('td');

tbody.addEventListener('click', function () {
   var target = event.target;

   if (target.tagName === 'TD') {
      target.appendChild(input);
      input.focus();

      if (target.textContent) {
         input.value = target.textContent;
         target.removeChild(target.childNodes[0]);
      };
   };
});

input.addEventListener('blur', function () {
   var parentTd = input.parentElement;

   parentTd.textContent = input.value;
   input.value = '';
});

input.addEventListener('keypress', function (el) {
   if (el.key === 'Enter') {
      input.blur();
   };
});