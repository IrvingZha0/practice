function narcissistic( value ) {
  let valueAry = value.toString().split('')
  let result = 0
  valueAry.forEach(function(item, index){
    result += Math.pow(valueAry[index], valueAry.length)
  })
  return result === value
}


console.log('A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.')
console.log('For example, take 153 (3 digits):')
console.log('1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153')
console.log('and 1634 (4 digits):')
console.log('1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634')