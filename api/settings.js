'use strict';
var request = require('request');
var format = require('../lib/format');

module.exports = function (api) {
  api.settings = {};

  api.settings.company = function (cb) {
    var data = { url: '/3/settings/company' };
    api.send.get(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, body);
    });
  };
};

