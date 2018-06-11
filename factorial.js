// function factorial(n) {
//     // Add some code
//     if (n < 0) { return null }
//     let num = parseInt(n)
//     if (num !== n) {
//         return null
//     } else {
//         let result = 1;
//         for (let i = 1; i <= num; i++) {
//             result *= i;
//         }
//         let pureNum = result.toLocaleString().replace(/,/g, '')
//         return '' + pureNum;
//     }
// }

function factorial(n) {
    // Add some code
    if (n < 0) { return null; }
    if (n == 0 || n == 1) { return "1"; }
    let intN = parseInt(n)
    if (intN !== n) {
        return null
    } else {
        let result = [1];
        for (let num = 2; num <= n; num++) {
            for (let i = 0, plus = 0; i < result.length || plus != 0; i++) {
                let count = (i < result.length) ? (num * result[i] + plus) : plus;
                result[i] = count % 10;
                plus = (count - result[i]) / 10;
            }
        }
        return result.reverse().join("");
    }
}

console.log(factorial(1))
console.log(factorial(5))
console.log(factorial(9))
console.log(factorial(15))
console.log(factorial(25))
console.log(factorial(171))