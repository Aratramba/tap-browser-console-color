'use strict';
/* global require */

require('..');
var test = require('tape');

test('whatever', function (assert){
  assert.equal(1,1);
  assert.equal(1,2);
  assert.end();
});