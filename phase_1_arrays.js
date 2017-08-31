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
