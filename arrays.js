var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, el){
     return [el, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(arr, el){
     arr.pop(el);
  
}

function addElementToEndOfArray(arr, el){
  return arr.push(el);
}