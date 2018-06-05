function scramble(str1, str2) {
    //code me
    let s1 = str1.split('').sort()
    let s2 = str2.split('').sort()
    let i = 0;
    for (var x = 0; i < s2.length && x <= s1.length; x++) {
        if (s2[i] === s1[x]) {
            i++;
        }
    }
    console.log(x)
    return (x <= s1.length);
}
console.log(scramble('rkqodlw', 'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('steaaa', 'steak'))