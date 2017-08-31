Array.prototype.bubbleSort1 = function () {


  let repeat = true;
  while (repeat) {
    repeat = false;
    for (var i = 0; i < this.length; i++) {
      let a = this[i];
      let b = this[i + 1];
      if (a > b) {
        this[i] = b;
        this[i + 1] = a;
        repeat = true;
      }
    }
  }
  return this;
};

String.prototype.substrings = function () {
  let returnArray = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j <= this.length; j++) {
      returnArray.push(this.slice(i, j));
    }
  }
  return returnArray;
};
