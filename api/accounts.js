'use strict';
var request = require('request');
var format = require('../lib/format');

module.exports = function (api) {
  api.accounts = {};

  api.accounts.get = function (id, cb) {
    var data = { url: '/3/accounts/' + escape(id) };
    api.send.get(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, body);
    });
  };

  api.accounts.list = function (opts, cb) {
    var data = { url: '/3/accounts', qs: opts };
    api.send.get(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, format.page(api, body));
    });
  };

  api.accounts.create = function (opts, cb) {
    var data = { url: '/3/accounts', body: opts };
    api.send.post(data, function (err, r, body) {
      if(err) return cb(err);
      return body;
    });
  };
};
