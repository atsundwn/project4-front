'use strict';

var ux = {

  init: function () {
    $('#registerMenu').show();
    $('#loginMenu').hide();
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
