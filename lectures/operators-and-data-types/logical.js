//   Logical Operators

// 1) Logical AND (&&): This operator returns true if both the operands are true.
// console.log(true && false);  Outputs: false
// 2) Logical OR (||): This operator returns true if at least one of the operands is true.
// console.log(true || false); // Outputs: true
// 3) Logical NOT (!): This operator returns the opposite of the operand. If the operand is true, it returns false. If the operand is false, it returns true.
// console.log(!true); // Outputs: false

console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(true && true && true && false); // false

console.log(2 > 4 && 5 > 3); // false
console.log(2 < 4 && 5 > 3); // true
console.log(2 < 4 && 5 > 3 && 0 > 0); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(true || true); // true

console.log(!true); // false
console.log(!false); // true
console.log(!!false); // false
console.log(!!!true); // false

console.log(!!false && !false); // false
console.log(!!true || !false); // true
