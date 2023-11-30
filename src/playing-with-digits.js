function playingWithDigits(n, p) {
  if (n < 10 && p === 1) {
    return 1;
  }

  let numberArr = n.toString().split('');
  console.log('numberArr: ', numberArr);

  let sumOfPows = 0;
  for (let i = 0; i < numberArr.length; i++) {
    let power = i === 0 ? p : p + i;
    console.log('power: ', power);
    console.log('Math.pow(numberArr[i], power): ', Math.pow(numberArr[i], power));
    sumOfPows += Math.pow(numberArr[i], power);
  }

  console.log('sumOfPows: ', sumOfPows);
  if (sumOfPows < n || sumOfPows % n != 0) {
    return -1;
  }
  return 1;
}

module.exports = playingWithDigits;
