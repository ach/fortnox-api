'use strict';
var request = require('request');
var format = require('../lib/format');

module.exports = function (api) {
  api.voucherSeries = {};

  api.voucherSeries.list = function (opts, cb) {
    var data = { url: '/3/voucherseries', qs: opts };
    api.send.get(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, format.page(api, body));
    });
  }

  api.voucherSeries.get = function (voucherserie_ref, cb) {
    var data = { url: '/3/voucherseries/'+voucherserie_ref};
    api.send.get(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, body);
    });
  }

  api.voucherSeries.create = function (opts, cb) {
    var data = { url: '/3/voucherseries', body: opts };
    api.send.post(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, body);
    });
  }

  api.voucherSeries.update = function (voucherserie_ref, opts, cb) {
    var data = { url: '/3/voucherseries/'+voucherserie_ref, body: opts };
    api.send.put(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, body);
    });
  }
}

