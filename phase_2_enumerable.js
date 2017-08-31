function multByTwo(num) {
  return num * 2;
}

Array.prototype.myEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  const returnArr = [];
  this.myEach(el => {
    returnArr.push(callback(el));
  });
  return returnArr;
};

Array.prototype.myReduce = function (callback, accumulator) {
  const arr = this.slice(0);

  if (accumulator === undefined) {
    accumulator = arr.shift();
  }

  arr.myEach( (el) => {
    accumulator = callback(accumulator, el);
  });

  return accumulator;
};


// // without initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }); // => 6
//
// // with initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }, 25); // => 31
