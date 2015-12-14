'use strict';

// Useful functions
var form2object = function(form) {
  var data = {};
  $(form).find('input').each(function(index, element) {
    var type = $(this).attr('type');
    if ($(this).attr('name') && type !== 'submit') {
      data[$(this).attr('name')] = $(this).val();
    }
  });
  return data;
};

var wrap = function wrap(root, formData) {
  var wrapper = {};
  wrapper[root] = formData;
  return wrapper;
};


$(document).ready(function () {

  ux.init();

  $('#register-nav').on('submit', function (e) {
    var credentials = wrap('credentials', form2object(this));
    console.log(credentials);
    e.preventDefault();
    api.register(credentials, cb.registerCB);
  });

  $('#login-nav').on('submit', function (e) {
    var credentials = wrap('credentials', form2object(this));
    console.log(credentials);
    e.preventDefault();
    api.login(credentials, cb.loginCB);
  });

  $('#alreadyLogin').on('click', function (e) {
    e.preventDefault();
    ux.login();
  });

  $('#joinUs').on('click', function (e) {
    e.preventDefault();
    ux.register();
  });


});
