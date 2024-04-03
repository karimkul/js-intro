// 1. + Operator
var firstName = "Jamshid";
var lastName = "Karimkulov";
var fullName = firstName + " " + lastName;
var space = " ";

console.log(fullName);
// console.log(firstName);
// console.log(lastName);

// 2. concat() method
console.log(firstName.concat(space, lastName));
var fullNameConcat = firstName.concat(space, lastName);
console.log(fullNameConcat);

var city = "Long Island City";
var state = "New York";
var address = city + space + state;
address = city.concat(space, state);

console.log(address);

// 3. Template Literals (String Interpolation)
var fullName = `${firstName} ${lastName}`;
console.log(fullName);

var num1 = 23;
var num2 = 32;

var result = `when we add ${num1} to ${num2}, we will get ${num1 + num2} `;
console.log(result);

// 4. Assignment operator
firstName = firstName + space + lastName;
console.log(firstName);

var str1 = "Hello";
str1 = str1 + " world";
str1 += " world";
console.log(str1);
