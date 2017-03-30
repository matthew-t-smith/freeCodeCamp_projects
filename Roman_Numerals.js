function convertToRoman(num) {
  var str = num.toString();
  var arr = str.split('');
  str = "";
  
  if (arr.length > 3) {
    var thousands = parseInt(arr[arr.length-4]);
    switch (thousands) {
      case 1:
        str += "M";
        break;
      case 2:
        str += "MM";
        break;
      case 3:
        str += "MMM";
        break;
    }
  }
  
  if (arr.length > 2) {
    var hundreds = parseInt(arr[arr.length-3]);
    switch (hundreds) {
      case 1:
        str += "C";
        break;
      case 2:
        str += "CC";
        break;
      case 3:
        str += "CCC";
        break;
      case 4:
        str += "CD";
        break;
      case 5:
        str += "D";
        break;
      case 6:
        str += "DC";
        break;
      case 7:
        str += "DCC";
        break;
      case 8:
        str += "DCCC";
        break;
      case 9:
        str += "CM";
        break;
    }
  }
  
  if (arr.length > 1) {
    var tens = parseInt(arr[arr.length-2]);
    switch (tens) {
      case 1:
        str += "X";
        break;
      case 2:
        str += "XX";
        break;
      case 3:
        str += "XXX";
        break;
      case 4:
        str += "XL";
        break;
      case 5:
        str += "L";
        break;
      case 6:
        str += "LX";
        break;
      case 7:
        str += "LXX";
        break;
      case 8:
        str += "LXXX";
        break;
      case 9:
        str += "XC";
        break;
    }
  }
  
  var ones = parseInt(arr[arr.length-1]);
  switch (ones) {
      case 1:
        str += "I";
        break;
      case 2:
        str += "II";
        break;
      case 3:
        str += "III";
        break;
      case 4:
        str += "IV";
        break;
      case 5:
        str += "V";
        break;
      case 6:
        str += "VI";
        break;
      case 7:
        str += "VII";
        break;
      case 8:
        str += "VIII";
        break;
      case 9:
        str += "IX";
        break;
    }

  return str;
}
