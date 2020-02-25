// -------------------------- Модуль по созданию случайных чисел и массивов

'use strict';
(function () {

  var randomNumberArray = [];

  //  Функция генерации случайного числа

  window.getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  // Функция создания массива случайных неповторяющихся чисел

  window.getRandomNumbersArray = function (min, max) {
    while (randomNumberArray.length < max) {
      var randomNumber = window.getRandomNumber(min, max);
      if (randomNumberArray.indexOf(randomNumber) === -1) {
        randomNumberArray.push(randomNumber);
      }
    }
    return randomNumberArray;
  };

  // Функция создания случайного цвета

  window.getRandomColor = function () {
    var randomColor = '#';
    for (var i = 0; i < 3; i++) {
      randomColor += window.getRandomNumber(0, 256).toString(16);
    }
    return randomColor;
  };

})();
