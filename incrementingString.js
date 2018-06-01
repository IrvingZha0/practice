function incrementString(strng) {
  var baseString = strng;
  var substring;
  var substringLength;
  var substringIndex;
  var regexMatch;
  var incrementedSubString;
  var extractNumsRegEx = /([0-9])+/;
  var extractZeroesRegEx = /([0])/;

  if (!baseString.match(extractNumsRegEx)) {
    return baseString + 1;
  } else {
    regexMatch = baseString.match(extractNumsRegEx);
    substring = regexMatch[0];
    substringLength = regexMatch[0].length;
    substringIndex = regexMatch.index;
  }

  //split string in array to remove nums
  baseString = baseString.split('');
  for (var i = 1; i <= substringLength; i++) {
    baseString.pop();
  }

  //wrote separate function to increment number
  incrementedSubString = incrementSubString(substring, substringLength);
  return baseString.join('') + incrementedSubString;
}

function incrementSubString(str, len) {
  var numToIncrement = +str;
  numToIncrement += 1;
  if (numToIncrement.length === len) {
    return "" + numToIncrement;
  } else {
    //the else statement adds the leading zeroes
    numToIncrement = numToIncrement.toString();
    while (numToIncrement.length < len) {
      numToIncrement = 0 + numToIncrement;
    }
    return numToIncrement;
  }
}

console.log(incrementString("foobar000"))
console.log(incrementString("foo"))
console.log(incrementString("foobar001"))
console.log(incrementString("foobar99"))
console.log(incrementString("foobar0999"))
console.log(incrementString(""))