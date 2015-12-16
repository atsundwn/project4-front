'use strict';

var cb = {

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
    }
  },

  logoutCB: function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      ux.init();
    }
  }

};
