function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Divide by zero is not allowed");
  }

  return a / b;
}

/*
add(5,6)
substract(5,6)
divide(4,2)
*/

module.exports = {
  add,
  substract,
  divide,
};
