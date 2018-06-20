function findShort(s) {
    let sAry = s.split(' ')
    sAry.sort((a, b) => {
        return a.length < b.length ? 1 : -1
    })
    return sAry.pop().length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))