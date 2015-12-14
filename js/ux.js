'use strict';

var ux = {

  init: function () {
    $('#loginMenu').hide();
  },

  register: function () {
    $('#registerMenu').show();
    $('#loginMenu').hide();
  },

  login: function () {
    $('#registerMenu').hide();
    $('#loginMenu').show();
  }


};
