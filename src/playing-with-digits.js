function playingWithDigits(n, p) {
  if (n < 10 && p === 1) {
    return 1;
  }

  let sumOfPows = calculateSumOfPows(n, p);
  return calculateResult(n, sumOfPows);
}

function calculateResult(n, sumOfPows) {
  if (sumOfPows < n || sumOfPows % n != 0) {
    return -1;
  } else {
    return sumOfPows / n;
  }
}

function calculateSumOfPows(n, p) {
  let numberArr = n.toString().split('');
  let sumOfPows = 0;
  for (let i = 0; i < numberArr.length; i++) {
    let power = i === 0 ? p : p + i;
    sumOfPows += Math.pow(numberArr[i], power);
  }
  return sumOfPows;
}

module.exports = playingWithDigits;
