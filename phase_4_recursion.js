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

function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exponent1(base, exp - 1);
  }
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  } else {
    if (exp % 2 === 0) {
      return Math.pow(exponent2(base, Math.floor(exp / 2)), 2);
    } else {
      return base * Math.pow(exponent2(base, Math.floor(exp / 2)), 2);
    }
  }
}

// function exponent2(base, exp) {
//   if (exp === 0) {
//     return 1;
//   } else if (exp === 1) {
//     return base;
//   } else {
//     if (exp % 2 === 0) {
//       let
//       return exponent2(base, exp / 2) * exponent2(base, exp / 2);
//     } else {
//       return base * exponent2(base, exp / 2) * exponent2(base, exp / 2);
//     }
//   }
// }

function fibonacci(n) {

}

function bsearch(arr, target) {

}
