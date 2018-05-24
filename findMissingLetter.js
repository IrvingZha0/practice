function findMissingLetter(array) {
  var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var startingIndex = 0;
  var alphabet = [];
  alphabet = lowerCaseAlphabet.includes(array[0]) ? lowerCaseAlphabet : upperCaseAlphabet;
  for (var i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === array[0]) {
      startingIndex = i;
    }
  }

  var arrayIndex = 0;
  for (var o = startingIndex; o < alphabet.length; o++) {
    if (alphabet[o] !== array[arrayIndex]) {
      return alphabet[o];
    }
    arrayIndex++;
  }
  return '';
}

console.log(findMissingLetter(['a','b','c','d','f']))
console.log(findMissingLetter(['O','Q','R','S']))