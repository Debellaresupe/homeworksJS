function getArrayParams(...arr) {
let min = arr[0];
let max = arr[0];
let avg = 0;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] <= min) {
  min = arr[i];
} else if (arr[i] >= max) {
  max = arr[i];
}
}
sum = arr.reduce((a, b) => a + b, 0);
avg = +((sum / arr.length).toFixed(2));
return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  sum = arr.reduce((a, b) => a + b, 0);
  return sum
}

function differenceMaxMinWorker(...arr) {
  if (arr.length > 0) {
let max = Math.max(...arr);
let min = Math.min(...arr);
let minMaxDiff = max - min;
return minMaxDiff
} else {
  return 0
}
}

function differenceEvenOddWorker(...arr) {
  let summEvenElements = 0;
  let summOddElements = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      summEvenElements += arr[i];
    } else {
      summOddElements += arr[i];
    }
  }
  let evenOddDiff = summEvenElements - summOddElements;
  return evenOddDiff
}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
