// -------------------------- Модуль отвечающий за открытие/закрытие модульного окна

'use strict';
(function () {
  var userDialog = document.querySelector('.setup');
  var dialogOpen = document.querySelector('.setup-open');
  var dialogClose = document.querySelector('.setup-close');
  var dialogUserName = document.querySelector('.setup-user-name');
  var form = userDialog.querySelector('.setup-wizard-form');

  var DEFAULT_DIALOG_X = getComputedStyle(userDialog).left;
  var DEFAULT_DIALOG_Y = getComputedStyle(userDialog).top;

  var setDefaultDialogLocation = function () {
    userDialog.style.top = DEFAULT_DIALOG_Y;
    userDialog.style.left = DEFAULT_DIALOG_X;
  };

  var openDialog = function () {
    setDefaultDialogLocation();
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onDialogEscPress);
  };

  var closeDialog = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onDialogEscPress);
  };

  var onDialogEscPress = function (evt) {
    window.util.escEvent(evt, closeDialog);
  };

  dialogOpen.addEventListener('click', function () {
    openDialog();
  });

  dialogOpen.addEventListener('keydown', function (evt) {
    window.util.enterEvent(evt, openDialog);
  });

  dialogClose.addEventListener('click', function () {
    closeDialog();
  });

  dialogClose.addEventListener('keydown', function (evt) {
    window.util.escEvent(evt, closeDialog);
    window.util.enterEvent(evt, closeDialog);
  });

  dialogUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onDialogEscPress);
  });

  dialogUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', onDialogEscPress);
  });

  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), closeDialog, window.errorPush);
    userDialog.classList.add('hidden');
    evt.preventDefault();
  });

})();
