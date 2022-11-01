function problem1(pobi, crong) {
  if(errorCheck(pobi,crong)) 
    return -1;
  let pobiScore = getMaxScore(pobi);
  let crongScore = getMaxScore(crong);
  return resultLogic(pobiScore, crongScore);
}

function sumOfDigits(num) {
  return String(num)
    .split('')
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
}

function mulOfDigits(num) {
  return String(num)
    .split('')
    .reduce((acc, curr) => {
      return acc * Number(curr);
    },1);
}

function getMaxScore([leftScore, rightScore]) {
  return Math.max(sumOfDigits(leftScore),mulOfDigits(leftScore),sumOfDigits(rightScore),mulOfDigits(rightScore));
}

function resultLogic(pobiScore, crongScore) {
  if (pobiScore > crongScore)  return 1
  else if(pobiScore < crongScore) return 2;
  else return 0;
}


function errorCheck(pobi,crong) {
  if(pobi.length !== 2 || crong.length !== 2) return true;
  else if(pobi[0]+1 !== pobi[1] || crong[0]+1 !== crong[1]) return true;
}

module.exports = problem1;
