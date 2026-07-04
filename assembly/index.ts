// Basic arithmetic operations

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function subtract(a: i32, b: i32): i32 {
  return a - b;
}

export function multiply(a: i32, b: i32): i32 {
  return a * b;
}

export function divide(a: i32, b: i32): f64 {
  if (b == 0) {
    return NaN;
  }

  return <f64>a / <f64>b;
}

export function power(base: i32, exponent: i32): i32 {
  let result: i32 = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

export function factorial(n: i32): i32 {
  if (n < 0) return -1;

  let result: i32 = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}