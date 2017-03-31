// function to return array of objects from collection that match  keys and values in source

function whatIsInAName(collection, source) {
  var arr = [];
  var foo = Object.keys(source);
  for (var i = 0; i < collection.length; i++) {
    if (foo.every(x => collection[i].hasOwnProperty(x))) { 
      var matches = 0;
      for (var j = 0; j < foo.length; j++) {
        if (source[foo[j]] == collection[i][foo[j]]) {
          matches++;
        }
      }
      if (matches == foo.length) {
        arr.push(collection[i]);
      }
    }
  }
  return arr;
}
