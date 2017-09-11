// function for translating TO Pig Latin

function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var temp = str.split('');
  var start = 0;
  var move = '';
  
  if (vowels.includes(temp[0])) {
    return str += "way";
  } else {
    start = temp.findIndex(x => vowels.includes(x));
    move = str.substr(0, start);
    temp = str.substr(start, str.length - start);
  }

  return temp + move + "ay";
}
