'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.exampleGET = function exampleGET (req, res, next) {
  Default.exampleGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pingGET = function pingGET (req, res, next) {
  Default.pingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.testGET = function testGET (req, res, next) {
  Default.testGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.testPOST = function testPOST (req, res, next) {
  Default.testPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
