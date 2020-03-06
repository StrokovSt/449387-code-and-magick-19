// -------------------------- Модуль по созданию и добавлению на страницу списка магов

'use strict';
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var usersList = document.querySelector('.setup-similar');
  var SIMILAR_MAGES = 4;

  // Функция создания DOM-элемента (мага)

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  // Функция заполнения блока similarListElement магами

  var documentFill = function (wizardList) {
    for (var i = 0; i < SIMILAR_MAGES; i++) {
      similarListElement.appendChild(renderWizard(wizardList[i]));
    }
    usersList.classList.remove('hidden');
  };

  window.load(documentFill, window.errorPush);

})();
