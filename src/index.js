module.exports = function multiply(first, second) {
  first = BigInt(first);
  second = BigInt(second);
  let multiply = BigInt(first * second);
  
  return multiply.toString();
}
