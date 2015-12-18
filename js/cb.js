'use strict';
var refresh = function () {
  setInterval(api.indexReminder(user.id, cb.indexReminderCB), 5000);
};

var cb = {

  // Handlebars
  reminderTemplate: function(){},

  init: function(){
    Handlebars.registerHelper('ifSent', function (conditionalVariable, options){
      if (conditionalVariable === options.hash.value) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });

    this.reminderTemplate = Handlebars.compile($('#reminders-index').html());
  },

  // -- End Handlebars

  registerCB: function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      $('#register-nav').find('input').val('');
      ux.login();
    }
  },

  loginCB: function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      user.id = data.user.id;
      user.token = data.user.token;
      user.phone_number = data.user.phone_number;
      $('#login-nav').find('input').val('');
      ux.afterLogin();
      refresh();
    }
  },

  logoutCB: function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully Logged Out');
      ux.init();
    }
  },

  createReminderCB: function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      $('#reminderForm').find('input').val('');
      api.indexReminder(user.id, cb.indexReminderCB);
    }
  },

  indexReminderCB: function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      var rowHTML = cb.reminderTemplate({reminders: data.reminders});
      $("#allReminders").html(rowHTML);
    }
  },

  deleteReminderCB: function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully deleted item');
      api.indexReminder(user.id, cb.indexReminderCB);
    }
  },

  showReminderCB: function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      $('#editMessage').val(data.message);
      $('#editDatetime').val(data.send_date);
      $('.edit').show();
    }
  },

  updateReminderCB: function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully updated item");
      api.indexReminder(user.id, cb.indexReminderCB);
      $('#editReminder').find('input').val('');
      $('.edit').hide();
    }
  }

};
