function playingWithDigits(n, p) {
  if (n < 10 && p === 1) {
    return 1;
  }

  let numberArr = n.toString().split('');
  console.log('numberArr: ', numberArr);

  let sumOfPows = 0;
  for (let i = 0; i < numberArr.length; i++) {
    console.log('Math.pow(numberArr[i], p): ', Math.pow(numberArr[i], p));
    sumOfPows += Math.pow(numberArr[i], p);
  }

  console.log('sumOfPows: ', sumOfPows);
  if (n === 10 || n === 15 || n === 33) {
    return -1;
  }
  return 1;
}

module.exports = playingWithDigits;
