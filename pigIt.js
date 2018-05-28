function pigIt(str){
  //Code here
  return str.split(' ').map(item=>item.slice(1)+item[0]+'ay').join(' ')
}

console.log(pigIt('This is my string'))
console.log(pigIt('Pig latin is cool'))