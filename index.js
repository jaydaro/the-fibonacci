
function getFibonacci(value = null) {
  if (!Number.isInteger(value)) {
    return [];
  }

  let fibArray = [];
  let val1 = 0, val2 = 1, count = 0, currentVal = 0;
  while(count < Math.abs(value + 1)) {
    count++;
    if (count < 3) {
      currentVal = count - 1;
      fibArray.push(currentVal);
    } else {
      currentVal = val1 + val2;
      val1 = val2;
      val2 = currentVal;
      fibArray.push(currentVal);
    }
  }
  return [currentVal, fibArray];
}

module.exports = { getFibonacci };