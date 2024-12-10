function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  }
  return a + b; 
}
console.log(foo(1, 2)); // 3
console.log(foo(null, 5)); // null
console.log(foo(undefined, 5)); //NaN