'use strict';

var ux = {

  init: function () {
    $('#registerMenu').hide();
    $('#loginMenu').show();
    $('#reminderButton').hide();
    $('#logoutButton').hide();
    $('#reminder').hide();
    $('.edit').hide();
  },

  register: function () {
    $('#loginMenu').hide();
    $('#registerMenu').show();
    setTimeout(function () {$('#registerMenu').attr('class', 'dropdown open')}, 200);
  },

  login: function () {
    $('#registerMenu').hide();
    $('#loginMenu').show();
    setTimeout( function () {$('#loginMenu').attr('class', 'dropdown open')}, 200);
  },

  afterLogin: function () {
    $('#reminderButton').show();
    $('#logoutButton').show();
    $('#reminder').show();
    $('#loginMenu').attr('class', 'dropdown');
  }
};
