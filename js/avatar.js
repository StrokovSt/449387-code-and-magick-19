// -------------------------- Модуль по настройке внешнего вида аватара (мага) игрока

'use strict';
(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
  var setupWizardHead = setupWizard.querySelector('.wizard-head');
  var setupWizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');

  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green', 'purple', 'orange'];
  var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // Настройка цвета персонажа

  setupWizardCoat.addEventListener('click', function () {
    var wizardCoatColor = coatColor[window.getRandomNumber(0, coatColor.length)];
    setupWizardCoat.style.fill = wizardCoatColor;
    document.querySelector('input[name = coat-color]').value = wizardCoatColor;
    window.coatChange(wizardCoatColor);
  });

  setupWizardHead.addEventListener('click', function () {
    setupWizardHead.style.background = window.getRandomColor();
  });

  setupWizardEyes.addEventListener('click', function () {
    var wizardEyesColor = eyesColor[window.getRandomNumber(0, eyesColor.length)];
    setupWizardEyes.style.fill = wizardEyesColor;
    document.querySelector('input[name = eyes-color]').value = wizardEyesColor;
    window.eyesChange(wizardEyesColor);
  });

  setupWizardFireball.addEventListener('click', function () {
    var wizardFireballColor = fireballColor[window.getRandomNumber(0, eyesColor.length)];
    setupWizardFireball.style.background = wizardFireballColor;
    document.querySelector('input[name = fireball-color]').value = wizardFireballColor;
  });

})();
