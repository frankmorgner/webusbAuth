/**
 * Utility functions
 *
 * Copyright (C) 2017, Jan Birkholz <jbirkhol@informatik.hu-berlin.de>
 */

/**
* Helper to print ArrayBuffer/Uint8Array to Console
*/
function printHexArray (array) {
  console.log(array2HexString(array));
}

/**
* Helper to print ArrayBuffer/Uint8Array to Console
*/
function array2HexString (array) {
  if(typeof array === 'undefined') return "No Array to print, undefined.";

  //determine input
  let uint8Array = null;
  if(array.constructor.name==="ArrayBuffer") {
    uint8Array = new Uint8Array(array);
  }
  if(array.constructor.name==="Uint8Array") {
    uint8Array = array;
  }

  //build hex string
  var resultString = "";
  if(!uint8Array) {resultString +="no response";} else {
    for(var i=0;i<uint8Array.length;i++) {
      var hex = uint8Array[i].toString(16);
      if(hex.length===1) hex="0"+hex;
      hex+="h, ";
      resultString+=hex;
    }
    resultString = resultString.substr(0,resultString.length-2);
    }
  return resultString;
}

var debug = true;
/**
 * custom debug log function, special casing byte arrays
 * @param  {Object} message - message to be outputted to dev console
 */
function log(message) {
 if(!debug) return;
 if(["ArrayBuffer","Uint8Array"].some(a=>a===message.constructor.name)) return printHexArray(message);
 console.log(message);
}

export {array2HexString, log};
