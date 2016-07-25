// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var path = require('path');
var SG = require('strong-globalize');
var g = SG();

module.exports = function(loopback) {
  loopback.getCurrentContext = function() {
    return null;
  };

  loopback.runInContext =
  loopback.createContext = function() {
    throw new Error(g.f('Current context is not supported in the browser.'));
  };
};
