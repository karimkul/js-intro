// 1. Challenge
var generatedNum = Math.floor(Math.random() * (15 + 1)) + 15;
var generatedNum2 = Math.floor(Math.random() * (15 + 1)) + 15;
var number1 = generatedNum;
var number2 = generatedNum2;

if (number1 === number2) {
    console.log("The numbers are equal.");
} else if (number1 > number2) {
    console.log("The first number is greater.");
} else {
    console.log("The second number is greater than the first one.");
}

// 2. ???????????????
var string1 = "examplestringonegenerated";
var string2 = "secondexamplestringgenerated";

// 3. Challenge
var randomNumber = Math.ceil(Math.random() * 1000);
console.log(randomNumber);

if (randomNumber % 3 === 0) {
    console.log("Fizz");
} else if (randomNumber % 5 === 0) {
    console.log("Buzz");
} else if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    console.log("FizzBuzz");
}

// 4. Challenge
var replaceString =
    "I find myself reflecting on past adventures, realizing that my greatest discoveries were often right at home, hidden in plain sight, waiting to be appreciated, and truly making them mine.";
var replaceI = replaceString.replaceAll("I", "We");
var replaceMy = replaceI.replaceAll("my", "our");
var replaceMyself = replaceMy.replaceAll("myself", "ourselves");
var replaceWe = replaceMyself.replaceAll("mine", "ours");
var resultString = replaceWe;
console.log(resultString);

// 5. Challenge
var mainString =
    "Exploring the vast universe of code can lead to unexpected discoveries.";
var targetString = "universe";
var includesString = mainString.includes(targetString);
console.log(includesString);

if (mainString.includes(targetString)) {
    console.log("[targetString] string is in [mainString].");
} else if (!mainString.includes(targetString)) {
    console.log("[targetString] is not in this [mainString].");
}

// 6. Challenge
// .trim() it will remove spaces from ending and starting of sentence
// .trimEnd() it will remove spaces only from ending of sentence
// .trimStart() it will remove spaces only from starting of sentence
