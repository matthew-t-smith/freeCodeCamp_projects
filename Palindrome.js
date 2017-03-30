function palindrome(str) {
  str = str.replace(/ /g, '');
  str = str.replace(/,/g, '');
  str = str.replace(/./g, '');
  str = str.toLowerCase();
  if (str.length % 2 === 0) {
    var x = 0;
    while (x < (str.length - x)) {
        if (str.charAt(x) === str.charAt((str.length - x) - 1)) {
          x++;
        } else {
          return false;
        }
   }
   return true; 
  } else {
    var y = 0;
    while (y < (str.length - y - 1)) {
      if (str.charAt(y) === str.charAt((str.length - y) - 1)) {
          y++;
        } else {
          return false;
        }
   }
   return true;
   }
}
