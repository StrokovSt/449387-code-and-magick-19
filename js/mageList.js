// -------------------------- Модуль по созданию и добавлению на страницу списка магов

'use strict';
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var usersList = document.querySelector('.setup-similar');

  // Функция создания DOM-элемента (мага)

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  // Функция заполнения блока similarListElement магами

  window.documentFill = function (wizardList) {
    var takeNumber = wizardList.length > 4 ? 4 : wizardList.length;
    similarListElement.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(renderWizard(wizardList[i]));
    }
    usersList.classList.remove('hidden');
  };

})();
