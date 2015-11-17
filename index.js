'use strict';
/* global module, console */


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
  console._log = console.log;

  // overwrite console.log
  console.log = function(line){

    var args = [];
    var key;
    var match;

    if(typeof line !== 'string'){
      args.push(line);
    }else{

      for(key in colorMap){
        if(line.indexOf(key) === 0){
          match = key;
        }
      }

      if(match){
        args.push('%c'+ line);
        args.push('color: '+ colorMap[match] +';');
      }else{
        args.push(line);
      }
    }

    console._log.apply(console, args);
  };  
}


/**
 * reset console.log
 */

function reset(){
  if(typeof console._log !== 'undefined'){
    console.log = console._log;
    delete console._log;
  }
}

module.exports = {
  patch: patch,
  reset: reset
};
