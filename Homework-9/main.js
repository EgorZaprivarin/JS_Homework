// Задание 1 ////////////////////////////

var names = ['Vasya', 'Petya', 'Slava'];

function newArrList(names) {

   var newNames = names.map(function (el) {
      return el = { name: el };
   });

   return newNames;
};

newArrList(names);

// Задание 2 ////////////////////////////

var arr = ['00', '13', '24'];

function whatTimeIsIt(arr) {
   var result = arr.reduce(function (previousValue, el) {
      return previousValue + ' : ' + el;
   }, 'Текущее время');

   return result;
};

whatTimeIsIt(arr);

// Задание 3 ////////////////////////////

function howManyVowels(text) {
   var vowels = ['а', 'о', 'у', 'ы', 'э', 'я', 'ё', 'ю', 'и', 'е'];

   var arrayOfVowels = text.toLowerCase().split('').filter(function (el) {
      return vowels.indexOf(el) !== -1;
   });

   return arrayOfVowels.length;
};

howManyVowels('АбвгдеЁжзийКлмнопРстуфхцчшщъыьЭюя');

/////////

function howManyVowels(text) {
   var vowels = ['а', 'о', 'у', 'ы', 'э', 'я', 'ё', 'ю', 'и', 'е'],
      summOfVowels = 0;

   text.toLowerCase().split('').forEach(function (el) {
      if (vowels.includes(el)) {
         summOfVowels++;
      };
   });

   return summOfVowels;
};

howManyVowels('АбвгдеЁжзийКлмнопРстуфхцчшщъыьЭюя');

// Задание 4 ////////////////////////////

function countSentencesLetters(text) {
   var textArr = text.split(/[\.*\!\?*]\s*/).filter(function (el) {
      return el != "";
   });

   textArr.forEach(function (el, i) {
      console.log(textArr[i] + ': Letters quantity is: ' + el.split(/[,*\s*]/).join('').length);
   });
};

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');

/////////////////////////////////////////