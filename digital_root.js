function digital_root(n) {
  var a = function() {
    var digits = n.toString().split("").map(i => +i);
    var sum = 0;
    for (var i = 0; i < digits.length; i++) {
      sum += digits[i];
    }

    var sumString = sum.toString();
    if (sumString.length > 1) {
      var sumDigits = sumString.split("").map(i => +i);
      let result = 0
      for(var j = 0; j< sumDigits.length; j++) {
        result =+sumDigits[j]
        return result;

      }
    } else {
      return sum;
    }
  };
  return a() > 9 ? digital_root(a()) : a();
}

console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(493193));
console.log(digital_root(999999999999));
