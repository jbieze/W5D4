Array.prototype.uniq = function () {
  const returnArr = [];
  for (var i = 0; i < this.length; i++) {
    if (returnArr.includes(this[i])) {
      continue;
    }
    else {
      returnArr.push(this[i]);
    }
  }
  return returnArr;
};

Array.prototype.twoSum = function () {
  const sumArr = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (i === j) {
        continue;
      }
      else (this[i] + this[j] === 0) {
        sumArr.push([i, j]);
      }
    }
  }
  return sumArr;
};
