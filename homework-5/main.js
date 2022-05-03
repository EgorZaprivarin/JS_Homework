// Задание 1

function Cat(name) {
   this.name = name;
   var foodAmount = 50;

   function formatFoodAmount() {
      return foodAmount + 'гр.';
   };

   this.feed = function () {
      console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
   };
}

var barsik = new Cat('Барсик');

barsik.feed();

// Задание 2

function Cat(name) {
   this.name = name;
   var foodAmount = 50;

   function formatFoodAmount() {
      return foodAmount + 'гр.';
   };

   this.feed = function () {
      console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
   };

   this.dailyNorm = function (amount) {
      if (!arguments.length) {
         return formatFoodAmount();
      };

      if (amount < 50 || amount > 100) {
         throw new Error('Значение должно быть не меньше 50 и не больше 100');
      };

      foodAmount = amount;
   };

}

var barsik = new Cat('Барсик');

barsik.dailyNorm(52);

barsik.feed();

//
