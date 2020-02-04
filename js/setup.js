'use strict';

// Переменные

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var usersList = document.querySelector('.setup-similar');
usersList.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardsList = [];

//  Функции

//  Функция генерации случайного числа

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

// Функция создания массива случайных неповторяющихся чисел

var getRandomNumbersArray = function (min, max) {
  var randomNumberArray = [];
  while (randomNumberArray.length < wizardNames.length) {
    var randomNumber = getRandomNumber(min, max);
    if (randomNumberArray.indexOf(randomNumber) === -1) {
      randomNumberArray.push(randomNumber);
    }
  }
  return randomNumberArray;
};

// Функция создания массива случайных магов

var constractWizardsList = function (names, surname, coat, eyes) {
  var randomNamesArray = getRandomNumbersArray(0, wizardNames.length);
  var randomLasetNamesArray = getRandomNumbersArray(0, wizardNames.length);
  for (var i = 0; i < names.length; i++) {
    var wizard = {};
    wizardsList.push(wizard);
    wizardsList[i]['name'] = names[randomNamesArray[i]] + ' ' + surname[randomLasetNamesArray[i]];
    wizardsList[i]['coatColor'] = coat[getRandomNumber(0, coat.length)];
    wizardsList[i]['eyesColor'] = eyes[getRandomNumber(0, eyes.length)];
  }
};

// Функция создания DOM-элемента

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

// Функция заполнения блока DOM-элементами

var documentFill = function (block) {
  constractWizardsList(wizardNames, lastNames, coatColor, eyesColor);
  for (var i = 0; i < 4; i++) {
    block.appendChild(renderWizard(wizardsList[i]));
  }
};

documentFill(similarListElement);
