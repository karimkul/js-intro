// 1. .concat() method
// we will use it to link(add) trings together
var str1 = "Hello, ";
var str2 = "world!";
var str3 = str1.concat(str2);
console.log(str3); // "Hello, world!"

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
//it will remove  only from  ending spaces
var str = "Hello, world! ";
console.log(str.trimEnd()); // "Hello, world!"

// 7. .trimStart method
//it will remove  only from  starting spaces
var str = "  Hello, world!";
console.log(str.trimStart()); // "Hello, world!"

// 8. indexOf() method
var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet.indexOf("j")); //9
console.log(alphabet.indexOf("m")); //12
console.log(alphabet.indexOf("2")); //-1
console.log(alphabet.indexOf("abc")); //0

// 9 .toLowerCase method
// it will change uppercase to lowercase
var animal = "tiger";
console.log(animal.toUpperCase()); //TIGER

// 10. .toUpperCase method
// it will change lowercase to uppercase
var anotherAnimal = "TIGER";
console.log(anotherAnimal.toLowerCase()); //tiger

// 11. .replace() method
// .replace(1argument,2argument) has 2 arguments first argument is source. second one is rename
// 12. .replaceAll() method
//it has 2 arguments as well it will change all
var address = "2345 E 13th street, Brooklyn, NY ";
var newAddress = address.replace("Brooklyn", "Queens"); //2345 E 13th street, Queens, NY
console.log(newAddress);

var paragraph = `I live at ${address}. I love Brooklyn`;
console.log(paragraph);

var newParagraphReplace = paragraph.replace("Brooklyn", "Queens");
console.log(newParagraphReplace);

var newParagraphReplaceAll = paragraph.replaceAll("Brooklyn", "Queens");
console.log(newParagraphReplaceAll);

// 13. .slice() method
// It has 2 arguments. It will slice from starting index to ending index.Last number of ending idex does not include
var lastName = "Temirov";
var newLastName = lastName.slice(0, 5); //Temir
console.log(newLastName);

var helloWorld = "Hello, World!";
var newHelloWorld = helloWorld.slice(1, helloWorld.length);
console.log(newHelloWorld);

//shortCut it will help only when we want to slice from one point up to the end
var newShortCut = helloWorld.slice(1);
console.log(newShortCut);

// 14. .toString()
