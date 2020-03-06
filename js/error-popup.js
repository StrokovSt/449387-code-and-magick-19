// -------------------------- Модуль по созданию всплывающего сообщения об ошибке

'use strict';
(function () {
  var error = document.querySelector('#error-popup').content.querySelector('.error-window');
  var header = document.querySelector('header');

  var renderError = function (message) {
    var errorClone = error.cloneNode(true);
    errorClone.querySelector('.error-window__text').textContent = message;
    return errorClone;
  };

  window.errorPush = function (message) {
    header.appendChild(renderError(message));
    var closePopup = document.querySelector('.error-window');
    var closeButton = document.querySelector('.error-window__button');

    closeButton.addEventListener('click', function () {
      closePopup.remove();
    });
  };

})();
