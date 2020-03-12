// -------------------------- Модуль по созданию и корректировке списка похожих магов
'use strict';
(function () {
  var newCoatColor = 'rgb(101, 137, 164)';
  var newEyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === newCoatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === newEyesColor) {
      rank += 1;
    }
    return rank;
  };

  var updateWizards = function () {
    var newMageArray = wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    });
    window.documentFill(newMageArray);
  };

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  window.onEyesChange = window.debounce(function (color) {
    newEyesColor = color;
    updateWizards();
  });

  window.onCoatChange = window.debounce(function (color) {
    newCoatColor = color;
    updateWizards();
  });

  window.load(successHandler, window.errorPush);

})();
