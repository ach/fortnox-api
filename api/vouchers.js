'use strict';
var request = require('request');
var format = require('../lib/format');

module.exports = function (api) {
  api.vouchers = {};

  api.vouchers.list = function (opts, cb) {
    var data = { url: '/3/vouchers', qs: opts };
    api.send.get(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, format.page(api, body));
    });
  }

  api.vouchers.get = function (voucher_ref, cb) {
    var data = { url: '/3/vouchers/sublist/'+voucher_ref.VoucherSeries+'/'+voucher_ref.VoucherNumber, qs: {financialyear: voucher_ref.Year}};
    api.send.get(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, body);
    });
  }

  api.vouchers.listSerie = function (serie, opts, cb) {
    var data = { url: '/3/vouchers/sublist/'+serie, qs: opts };
    api.send.get(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, format.page(api, body));
    });
  }

  api.vouchers.create = function (opts, cb) {
    var data = { url: '/3/vouchers', body: opts };
    api.send.post(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, body);
    });
  }
}

