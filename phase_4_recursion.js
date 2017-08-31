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
  if (arr.length === 0) {
    return 0;
  } else {
    let lastEl = arr[arr.length - 1];
    let remainingArr = arr.slice(0, -1);
    return sumRec(remainingArr) + lastEl;

  }
}

function exponent(base, exp) {

}

function fibonacci(n) {

}

function bsearch(arr, target) {

}
