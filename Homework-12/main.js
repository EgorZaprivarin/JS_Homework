// Задание 1 ////////////////////////////////////////////

var initialObj = {
   string: 'Vasya',
   number: 30,
   boolean: true,
   undefined: undefined,
   null: null,
   array: [1, 2, 3],
   object: {
      string2: 'Petrov',
      object2: {
         array2: [{}, {}]
      },
      object3: {}
   },
   method: function () {
      alert('Hello');
   }
};

var clonedObj = deepClone(initialObj);

function deepClone(Obj) {
   var newObjOrArr;
   if (Array.isArray(Obj)) {
      newObjOrArr = [];
   } else if (typeof (Obj) === 'object' && (Obj) !== 'NaN') {
      newObjOrArr = {};
   };
   for (var k in Obj) {
      if (Array.isArray(Obj[k])) {
         newObjOrArr[k] = deepClone(Obj[k]);
      } else if (typeof (Obj[k]) === 'object' && Obj[k] !== null) {
         newObjOrArr[k] = deepClone(Obj[k]);
      } else {
         newObjOrArr[k] = Obj[k];
      };
   };
   return newObjOrArr;
};

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

// Задание 2 ////////////////////////////////////////////////

function objectComparison(firstObj, secondObj) {
   if (Object.keys(firstObj).length !== Object.keys(secondObj).length) {
      return false;
   };
   for (var k in secondObj) {
      if (Array.isArray(secondObj[k])) {
         if (!objectComparison(firstObj[k], secondObj[k])) {
            return false;
         };
      } else if (typeof (secondObj[k]) === 'object' && secondObj[k] !== null) {
         if (!objectComparison(firstObj[k], secondObj[k])) {
            return false;
         };
      } else if (typeof (secondObj[k]) === 'function') {
         if (firstObj[k].toString() !== secondObj[k].toString()) {
            return false;
         };
      } else if (firstObj[k] !== secondObj[k]) {
         return false;
      };
   };
   return true;
};


objectComparison(initialObj, clonedObj);

/////////////////////////////////////////////////////////////