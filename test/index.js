'use strict';
/* global require, console */

var log = require('..');
var test = require('tape');

log.patch();

test('whatever', function (assert){
  assert.equal(typeof console._log, 'function');
  assert.equal(typeof log.patch, 'function');
  assert.equal(typeof log.reset, 'function');
  assert.equal('fail', 'pass');
  assert.end();
});