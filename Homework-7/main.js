// Задание 1 

function Animal(name) {
   this.name = name;
   var foodAmount = 50;

   var self = this;

   function formatFoodAmount() {
      return foodAmount + 'гр.';
   };

   this.feed = function () {
      console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
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

function Cat(name) {
   Animal.apply(this, arguments);

   var animalFeed = this.feed;

   this.feed = function () {
      animalFeed();
      satisfaction();
   };

   function satisfaction() {
      console.log('Кот доволен ^_^');
   };
}

var barsik = new Cat('Барсик');

barsik.dailyNorm();
barsik.feed();

barsik.dailyNorm(5);
barsik.feed();

barsik.dailyNorm(88);
barsik.feed();

// Задание 2 ///////////////////////////////////////////

function Animal(name) {
   this.name = name;
   var foodAmount = 50;

   var self = this;

   function formatFoodAmount() {
      return foodAmount + 'гр.';
   };

   this.feed = function () {
      console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
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

function Cat(name) {
   Animal.apply(this, arguments);

   var animalFeed = this.feed;

   this.feed = function () {
      animalFeed();
      satisfaction();

      return this;
   };

   function satisfaction() {
      console.log('Кот доволен ^_^');
   };

   this.stroke = function () {
      console.log('Гладим кота.');

      return this;
   };
}

var barsik = new Cat('Барсик');

barsik.dailyNorm(77);
barsik.feed().stroke().stroke().feed();

// Задание 3 /////////////////////////////////////////

function Animal(name) {
   this.name = name;
   this.foodAmount = 50;
}

Animal.prototype._formatFoodAmount = function () {
   return this.foodAmount + 'гр.';
};

Animal.prototype.feed = function () {
   console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

Animal.prototype.dailyNorm = function (amount) {
   if (!arguments.length) {
      return this._formatFoodAmount();
   };

   if (amount < 50 || amount > 100) {
      throw new Error('Значение должно быть не меньше 50 и не больше 100');
   };

   this.foodAmount = amount;
};

function Cat(name) {
   Animal.apply(this, arguments);
};

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
   Animal.prototype.feed.apply(this);
   Cat.prototype._satisfaction();

   return this;
};

Cat.prototype._satisfaction = function () {
   console.log('Кот доволен ^_^');
};

Cat.prototype.stroke = function () {
   console.log('Гладим кота.');

   return this;
};

var barsik = new Cat('Барсик');

barsik.dailyNorm(95);
barsik.feed().stroke().stroke().feed();

//////////////////////////////////////////////////////////