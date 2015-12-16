'use strict';
// Global user object
var user = {
  id: null,
  token: null,
  phone_number: null
};

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

// After DOM loads
$(document).ready(function () {

  ux.init();
  cb.init();

  // Register form handler
  $('#register-nav').on('submit', function (e) {
    var credentials = wrap('credentials', form2object(this));
    console.log(credentials);
    e.preventDefault();
    api.register(credentials, cb.registerCB);
  });

  // Login form handler
  $('#login-nav').on('submit', function (e) {
    var credentials = wrap('credentials', form2object(this));
    console.log(credentials);
    e.preventDefault();
    api.login(credentials, cb.loginCB);
  });

  // Already havee account? Login button handler
  $('#alreadyLogin').on('click', function (e) {
    e.preventDefault();
    ux.login();
  });

  // New here? 'Join us' button handler
  $('#joinUs').on('click', function (e) {
    e.preventDefault();
    ux.register();
  });

  // Logout navbar button handler
  $('#logoutButton').on('click', function (e) {
    e.preventDefault();
    api.logout(user.id, user.token, cb.logoutCB);
  });

  // Reminder submit button handler
  $('#reminderForm').on('submit', function (e) {
    e.preventDefault();
    var reminder = wrap('reminder', form2object(this));
    console.log(reminder);
    api.createReminder(reminder, user.token, cb.createReminderCB);
  });

  // Click handler for Reminder table
  $('#allReminders').on('click', function (e) {
    e.preventDefault();
    var reminder_id = $(e.target).data('reminder-id');
    var button = $(e.target).data('button');

    if (button === 'delete') {
      api.destroyReminder(reminder_id, user.token, cb.deleteReminderCB);
    }
  });


});
