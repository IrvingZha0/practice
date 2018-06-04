function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0]
}
console.log(findUniq([0,1,0]))
console.log(findUniq([1,1,2,1,1,1]))
console.log(findUniq([ 3, 10, 3, 3, 3 ]))
