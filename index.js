'use strict';
/* global module */


const COLOR_GREEN = 'green';
const COLOR_RED = 'red';

var colorMap = {
  'ok': COLOR_GREEN, 
  '# pass': COLOR_GREEN,
  'not ok': COLOR_RED,
  '# fail': COLOR_RED
};


/**
 * monkey patch console log
 */

function patch(){

  // store the original
  window.console._log = window.console.log;

  // overwrite console.log
  window.console.log = function(line){

    var args = [];
    var key;
    var match;

    for(key in colorMap){
      if(line.indexOf(key) === 0){
        match = key;
      }
    }

    if(match){
      args.push('%c'+ line +'%c');
      args.push('color: '+ colorMap[match] +';');
      args.push('color: inherit;');
    }else{
      args.push(line);
    }

    window.console._log.apply(window.console, args);
  };  
}


/**
 * reset console.log
 */

function reset(){
  if(typeof window.console._log !== 'undefined'){
    window.console.log = window.console._log;
    delete window.console._log;
  }
}

module.exports = {
  patch: patch,
  reset: reset
};
