'use strict';

var ux = {

  init: function () {
    $('#registerMenu').hide();
    $('#loginMenu').show();
    $('#reminderButton').hide();
    $('#logoutButton').hide();
    $('#reminder').hide();
  },

  register: function () {
    $('#registerMenu').show();
    $('#loginMenu').hide();
  },

  login: function () {
    $('#registerMenu').hide();
    $('#loginMenu').show();
  },

  afterLogin: function () {
    $('#reminderButton').show();
    $('#logoutButton').show();
    $('#reminder').show();
  }
};
