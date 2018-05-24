function divisors(integer) {
    var i=0, arr = [];
    for(n=2; n<=Math.ceil(Math.sqrt(integer)); n++) {
        if(integer%n === 0){
            arr.splice(i,0,n);
            if(integer/n != Math.sqrt(integer)) {
            	arr.splice(i+1,0,integer/n);
            }
            i++;
        }
    }
    arr = Array.from(new Set(arr))
    return (arr.length!=0) ? arr : integer + " is prime";
};

console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"