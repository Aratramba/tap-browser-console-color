'use strict';
/* global module */

/**
 * monkey patch console log
 */

var clog = console.log;
console.log = function(line){

  var args = [];
  
  if(line.indexOf('not ok') === 0){
    args.push(line.replace('not ok', '%cnot ok%c'));
    args.push('color: red;');
    args.push('color: inherit;');

  }else if(line.indexOf('ok') === 0){
    args.push(line.replace('ok', '%cok%c'));
    args.push('color: green;');
    args.push('color: inherit;');

  }else{
    args.push(line);
  }

  clog.apply(window.console, args);
};