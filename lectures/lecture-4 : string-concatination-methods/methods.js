// 1. .concat() method
// we will use it to link(add) trings together

//2. .includes() method
//if it includes? data type is boolean
var fullName = "Will Smith";
console.log(fullName.includes("ill")); //true
console.log(fullName.includes("W")); //true
console.log(fullName.includes("yu")); //false

var password = "sec123ret123";
console.log(password.includes("secret")); //true
console.log(password.includes("?") || password.includes("123")); // true
console.log(password.includes("?") || password.includes("/")); // false
console.log(!password.includes("?") || !password.includes("123")); // true

// 3. .endWith() method
// If it endWith(something)? data type is BOOLEAN
console.log(password.includes("123")); //true
console.log(password.endsWith("123")); //true
console.log(password.endsWith("321")); //false

// 4. .startWith() method
// If it startWith(something)? data type is BOOLEAN
console.log(password.includes("secret")); //false
console.log(password.startsWith("sec12")); //true
console.log(password.startsWith("qw")); //false

// 5. .trim() method
//it will remove spaces only starting and ending spaces
var anotherPassword = " adada edcae ";
console.log(anotherPassword.trim());
console.log(anotherPassword === anotherPassword.trim()); //false

// 6. .trimEnd method

// 7. .trimStart method

// 8. indexOf() method
var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet.indexOf("j")); //9
console.log(alphabet.indexOf("m")); //12
console.log(alphabet.indexOf("2")); //-1
console.log(alphabet.indexOf("abc")); //0

// 9 .toLowerCase method
// it will change uppercase to lowercase
var animal = "tiger";
console.log(animal.toUpperCase());

// 10 .toUpperCase method
// it will change lowercase to uppercase
var anotherAnimal = "TIGER";
console.log(anotherAnimal.toLowerCase());
