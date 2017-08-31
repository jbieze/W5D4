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
