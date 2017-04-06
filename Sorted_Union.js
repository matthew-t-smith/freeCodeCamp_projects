// function to take input of 2+ arrays and return array of unique values in original order

function uniteUnique(arr) {
  var array = [];
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      if (!array.includes(arguments[i][j])) {
          array.push(arguments[i][j]);
      }     
    }
  }
  return array;
}
