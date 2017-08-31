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
      } else if (this[i] + this[j] === 0) {
        sumArr.push([i, j]);
      }
    }
  }
  return sumArr;
};

Array.prototype.transpose = function () {
  const transposeArr = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this[i].length; j++) {
      if (i === 0) {
        transposeArr.push([this[i][j]]);
      }
      else {
        transposeArr[j].push(this[i][j]);
      }
    }
  }
  return transposeArr;
};
