function toCamelCase(str){
  str = str.split('');
  console.log(str)
  return str.map(function(el, i){
    if(el === '-' || el === '_'){
      el = str[i+1].toUpperCase();
      str.splice(i+1, 1);
    }
    return el;
  }).join('');
}
console.log(toCamelCase("The-stealth-sarrior"))