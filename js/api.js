'use strict';

var api = {
  url: 'http://localhost:3000',

  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

  register: function (credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/register',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  login: function (credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  indexReminder: function(callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/reminders',
      contentType: 'application/json'
      //dataType: 'json'
    }, callback);
  },

  //Authenticated api actions

  logout: function (id, token, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/logout/' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
    }, callback);
  },

  createReminder: function (data, token, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/reminders',
      headers: {
        Authorization: 'Token token=' + token
      },
      data: data,
      dataType: 'json'
    }, callback);
  },

  updateReminder: function (id, data, token, callback) {
    this.ajax({
      method: 'PATCH',
      url: this.cof + '/reminders/' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
      data: JSON.stringify(data),
      dataType: 'json'
    }, callback);
  },
};
