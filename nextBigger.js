function nextBigger(n) {
    //your code here
    let nAry = n.toString().split('')
    let nAryLength = nAry.length
    if (nAry.length < 2) { return -1 }
    let point = null;
    for (let i = nAry.length - 1; i > 0; i--) {
        if (+nAry[i] > +nAry[i - 1]) {
            point = i - 1;
            break;
        }
    }
    if (point === null) { return -1 }
    let right = nAry.splice(point);

    let remainLength = nAryLength - right.length
    let tempAry = right.length > 2 ? right.slice(-1 * (right.length - 2)) : [];

    let result = nAry.slice(0, remainLength).concat(right[1], right[0], tempAry).join('')
    return +result
}
console.log(nextBigger(123456798))
console.log(nextBigger(1234567908))
console.log(nextBigger(59884848483559))