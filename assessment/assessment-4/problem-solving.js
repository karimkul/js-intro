// 1. Challenge
var singleWord = "heaven";
var generatednum1 = Math.ceil(Math.random() * singleWord.length - 1);
var generatednum2 = Math.ceil(Math.random() * singleWord.length - 1);
var compareRandomStringLength = generatednum1 === generatednum2;
console.log(compareRandomStringLength); // true and false

var character1 = singleWord[generatednum1].toUpperCase();
var character2 = singleWord[generatednum2].toUpperCase();
console.log(character1);
console.log(character2);

// 2. Challenge
var randomNumber1 = Math.ceil(Math.random() * 1000);
console.log(randomNumber1);
var oddNum = randomNumber1 % 2 === 0;
var evenNum = randomNumber1 % 2 === 1;
console.log(oddNum);
console.log(evenNum);

// 3. Challenge
var numerator = Math.floor(Math.random() * -100);
var denominator = Math.floor(Math.random() * 4) + 5;
var devidedResult = Math.floor(numerator / denominator);
var roundedResult = Math.floor(Math.round(devidedResult));
console.log(devidedResult);
console.log(roundedResult);

// 4. Challenge
var testNumber = Math.floor(Math.random() * 2500) - 25;
var testDivisible3 = testNumber % 3 === 0 && testNumber % 5 !== 0;
console.log(testNumber);
console.log(testDivisible3);

// 5.  Challenge
var divTest = Math.floor(Math.random() * 101) + 100;
var testDivisible5 = divTest % 5 === 0 && divTest % 3 !== 0;
console.log(divTest);
console.log(testDivisible5);

// 6. Challenge
var creativeString =
    "Exploring the vast universe of code can lead to unexpected discoveries.";
var randomNumOfStringLength = Math.floor(Math.random() * creativeString.length);
var slicedString = creativeString.slice(randomNumOfStringLength);
console.log(randomNumOfStringLength);
console.log(slicedString);
