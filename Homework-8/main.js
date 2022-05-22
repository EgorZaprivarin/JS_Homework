// Задание 1 ////////////////////////////////////////////

function filterNumbersArr(numbers) {
   var newArr = numbers.filter(function (el) {
      return el > 0;
   });

   return newArr;
};

filterNumbersArr([-1, 0, 2, 34, -2]);

// Задание 2 ////////////////////////////////////////////

function findPositiveNumber(numbers) {
   var number = numbers.find(function (n) {
      return n > 0;
   });

   return number;
};

findPositiveNumber([-1, 0, 2, 34, -2]);

// Задание 3 ///////////////////////////////////////////

function isPalindrome(word) {
   if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')) {
      return true;
   } else {
      return false
   };
};

isPalindrome('шалаШ');

// Задание 4 ///////////////////////////////////////////

function areAnagrams(word1, word2) {
   if (word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('')) {
      return true;
   } else {
      return false;
   };
};

areAnagrams('хомяк', 'яКоХм')

// Задание 5 ///////////////////////////////////////////

function divideArr(arr, l) {
   var newArr = [];

   while (true) {
      newArr.push(arr.splice(0, l));
      if (arr.length === 0) {
         break;
      };
   };

   return newArr;
};

divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);

//////////

function divideArr(arr, l) {
   var newArr = [];

   while (true) {
      newArr[newArr.length] = arr.splice(0, l);
      if (arr.length === 0) {
         break;
      };
   };

   return newArr;
};

divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);

// Задание 6* ///////////////////////////////////////////

function degreeOfTwo(number) {
   while (true) {
      number /= 2;
      if (number == 1) {
         return true;
      } else if (number < 1) {
         return false;
      };
   };
};

degreeOfTwo(64);

////////////////////////////////////////////////////////