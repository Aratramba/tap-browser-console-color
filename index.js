'use strict';

/**
 * monkey patch console log
 */

window.console._log = window.console.log;
window.console.log = function(line){

  var args = [];
  
  if(line.indexOf('not ok') === 0 || line.indexOf('# fail') === 0){
    args.push('%c'+ line +'%c');
    args.push('color: red;');
    args.push('color: inherit;');

  }else if(line.indexOf('ok') === 0 || line.indexOf('# pass') === 0){
    args.push('%c'+ line +'%c');
    args.push('color: green;');
    args.push('color: inherit;');

  }else{
    args.push(line);
  }

  window.console._log.apply(window.console, args);
};
