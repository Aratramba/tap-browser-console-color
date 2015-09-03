'use strict';
/* global require */

var log = require('..');
var test = require('tape');

log.patch();

test('whatever', function (assert){
  assert.equal(1,1);
  assert.equal(1,2);
  assert.end();
});