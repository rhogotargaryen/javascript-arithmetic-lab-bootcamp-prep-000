function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
}

function inc(a) {
  a += 1;
  return a;
}

function dec(a) {
  a -= 1;
  return a;
}

function makeInt(a, b) {
  parseInt (a);
  if (b /= 10) {
    a = 0
  }
 return a;
}
