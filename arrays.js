var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, el){
     return [el, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, el){
     return chocolateBars.unshift(el);
}

function addElementToEndOfArray(chocolateBars, el){
  return chocolateBars.push(el);
}