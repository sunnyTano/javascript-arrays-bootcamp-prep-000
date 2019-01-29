var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, el){
     return [el, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(arr, el){
     return arr.unshift(el);
}

function addElementToEndOfArray(arr, el){
  return arr.push(el);
}