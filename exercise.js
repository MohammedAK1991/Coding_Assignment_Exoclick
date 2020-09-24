function highestOccurrence(array) {
  if (array.length == 0) return null;
  const obj = {};
  let maxCount = 1;
  let maxArray = []

  for (let i = 0; i < array.length; i++) {
    const el = array[i];

    if (obj[el] == null) obj[el] = 1;
    else obj[el]++;

    if (obj[el] > maxCount) {
      maxArray = [el];
      maxCount = obj[el];
    } else if (obj[el] == maxCount) {
      maxArray.push(el);
      maxCount = obj[el];
    }
  }
  return maxArray;
}

function maxSubarraySum (array, num) {
  if (array.length === 0) return null;

  let start = 0;
  let sum = 0;
  let maxSum = 0;

  for (let end = 0; end < array.length; end++) {
    sum += array[end];
    if (end >= num -1) {
      maxSum = Math.max(sum, maxSum);
      sum -= array[start];
      start++;
    }
  }
  return maxSum;
}

function averagePair(array, num) {
  let start = 0 ;
  let end = array.length - 1;
  // return end;
  while (start < end) {
    if ((array[start] + array[end])/ 2 == num ) {
      return true;
    }
    if ((array[start] + array[end])/ 2 >  num ) {
      end--;
    }
    if ((array[start] + array[end])/ 2 < num ) {
      start++;
    }
  }
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));


module.exports = {highestOccurrence, maxSubarraySum, averagePair};