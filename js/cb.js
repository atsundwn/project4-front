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
      $('#login-nav').find('input').val('');
    }
  }

};
