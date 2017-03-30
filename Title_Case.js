function titleCase(str) {
  str = str.toLowerCase();
  var array = str.split(' ');
  for (var i = 0; i < array.length; i++) {
    array[i].charAt(0).toUpperCase();
  }
  str = array.join(' ');
  return str;
}
