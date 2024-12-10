function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; // Handle null and undefined consistently
  }
  return a + b; 
}
console.log(foo(1, 2)); // 3
console.log(foo(null, 5)); // null
console.log(foo(undefined, 5)); // null
console.log(foo(5, undefined)); // null