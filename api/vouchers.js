'use strict';
var request = require('request');
var format = require('../lib/format');

module.exports = function (api) {
  api.orders = {};

  api.orders.list = function (opts, cb) {
    var data = { url: '/3/vouchers', query: opts };
    api.send.get(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, format.page(api, body));
    });
  }

  api.orders.listSerie = function (serie, opts, cb) {
    var data = { url: '/3/vouchers/sublist/'+serie, query: opts };
    api.send.get(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, format.page(api, body));
    });
  }

  api.orders.create = function (opts, cb) {
    var data = { url: '/3/vouchers', body: opts };
    api.send.post(data, function (err, r, body) {
      if(err) return cb(err);
      cb(null, body);
    });
  }
}

