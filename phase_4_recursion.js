function range(start, end) {
  if (start === end) {
    return [start];
  } else {
    let arr = range(start, end - 1);
    arr.push(end);
    return arr;
  }
}

function sumRec(arr) {

}

function exponent(base, exp) {

}

function fibonacci(n) {

}

function bsearch(arr, target) {

}
