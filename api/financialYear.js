'use strict';
var request = require('request');
var format = require('../lib/format');

module.exports = function (api) {
  api.financialyear = {};

  api.financialyear.list = function (opts, cb) {
    var data = { url: '/3/financialyears', qs: opts };
    api.send.get(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, format.page(api, body));
    });
  }

}

