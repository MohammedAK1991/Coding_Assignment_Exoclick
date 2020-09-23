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


module.exports = highestOccurrence;