console.time()

function cashout(amount) {
  // check if input is a number and positive
  if (typeof amount !== 'number' || amount <= 0 || isNaN(amount)) {
    return "invalid string";
  }

  // calculate 1.75% charge
  const charge = (amount * 1.75) / 100;

  // return charge (it can be decimal)
  return charge;
}

// Example Test Cases:
console.log(cashout(1000)); // 17.5
// console.log(cashout(-500)); // "invalid string"
// console.log(cashout("1000")); // "invalid string"
// console.log(cashout(1500.75)); // 26.262999999999998


console.timeEnd()