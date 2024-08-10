"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4 * a * c;
  if (discriminant < 0) {
  } else if (discriminant == 0) {  
    let root1 = -b / (2 * a);
    arr.push(root1);
  } else {
    let root2 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root3 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root2, root3);
  }
  console.log(arr)
  return arr
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent / 12 / 100;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (percentMonth + (percentMonth / (((1 + percentMonth)**countMonths) - 1)));
  let totalLoanAmount = +((monthlyPayment * countMonths).toFixed(2));
  return totalLoanAmount;
  console.log(totalLoanAmount)  
}