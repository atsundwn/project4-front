'use strict';

var cb = {

  // Handlebars
  reminderTemplate: function(){},

  init: function(){
    Handlebars.registerHelper('ifSomeField', function (conditionalVariable, options){
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
      api.indexReminder(cb.indexReminderCB);
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
      api.indexReminder(cb.indexReminderCB);
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
  }

};
