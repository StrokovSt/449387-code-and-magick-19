'use strict';

// Переменные

var userDialog = document.querySelector('.setup');
var dialogOpen = document.querySelector('.setup-open');
var dialogClose = document.querySelector('.setup-close');
var dialogUserName = document.querySelector('.setup-user-name');

var setupWizard = document.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupWizardFireball = document.querySelector('.setup-fireball-wrap');

//  var usersList = document.querySelector('.setup-similar');
//  usersList.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizardNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var wizardsList = [];

//  Константы

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

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

// Сценарии взаимодействия пользователя с игрой

// Открытие/закрытие окна

var onDialogEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closeDialog();
  }
};

var openDialog = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onDialogEscPress);
};

var closeDialog = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onDialogEscPress);
};

dialogOpen.addEventListener('click', function () {
  openDialog();
});

dialogOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openDialog();
  }
});

dialogClose.addEventListener('click', function () {
  closeDialog();
});

dialogClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY || evt.key === ESC_KEY) {
    closeDialog();
  }
});

// Ввод имени персонажа

dialogUserName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onDialogEscPress);
});

dialogUserName.addEventListener('invalid', function () {
  if (dialogUserName.validity.tooShort) {
    dialogUserName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (dialogUserName.validity.tooLong) {
    dialogUserName.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (dialogUserName.validity.valueMissing) {
    dialogUserName.setCustomValidity('Введите имя персонажа');
  } else {
    dialogUserName.setCustomValidity('');
  }
});

// Настройка цвета персонажа

setupWizardCoat.addEventListener('click', function () {
  var wizardCoatColor = coatColor[getRandomNumber(0, coatColor.length)];
  setupWizardCoat.style.fill = wizardCoatColor;
  document.getElementsByName('coat-color')[0].value = wizardCoatColor;
});

setupWizardEyes.addEventListener('click', function () {
  var wizardEyesColor = eyesColor[getRandomNumber(0, eyesColor.length)];
  setupWizardEyes.style.fill = wizardEyesColor;
  document.getElementsByName('eyes-color')[0].value = wizardEyesColor;
});

setupWizardFireball.addEventListener('click', function () {
  var wizardFireballColor = fireballColor[getRandomNumber(0, eyesColor.length)];
  setupWizardFireball.style.background = wizardFireballColor;
  document.getElementsByName('fireball-color')[0].value = wizardFireballColor;
});
