function towerBuilder(nFloors) {
  // build here
  let resultAry = []
  for(let i=0; i<nFloors; i++) {
    let totalL = 2 * nFloors - 1
    let starL = 2 * i + 1
    let spaceL = (totalL - starL) / 2
    let result = ' '.repeat(spaceL) + '*'.repeat(starL)+' '.repeat(spaceL)
    resultAry.push(result)
  }
    console.log(resultAry)
}

towerBuilder(3)
towerBuilder(2)
towerBuilder(1)
towerBuilder(7)