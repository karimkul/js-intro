// 1. Challenge
var generatedNum = Math.floor(Math.random() * (15 + 1)) + 15;
var generatedNum2 = Math.floor(Math.random() * (15 + 1)) + 15;

if (generatedNum === generatedNum2) {
    console.log("The numbers are equal.");
} else if (generatedNum > generatedNum2) {
    console.log("The first number is greater.");
} else {
    console.log("The second number is greater than the first one.");
}

// 2. ???????????????
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomIdx = Math.floor(Math.random() * alphabet.length);
var targetCharacter = alphabet[randomIdx];

var string1 = "examplestringonegenerated";
var string2 = "secondexamplestringgenerated";

var originalLength1 = string1.length;
var originalLength2 = string2.length;

var newString1 = string1.replaceAll(targetCharacterOfLatter, "");
var newString2 = string1.replaceAll(targetCharacterOfLatter, "");

var count1 = originalLength1 - newString1.length;
var count2 = originalLength2 - newString2.length;

if (count1 === count2 && count1 > 0) {
    console.log(
        "Number of " + targetCharacter + " is the same in both strings."
    );
} else if (count1 > count2) {
    console.log(
        "Number of " +
            targetCharacter +
            " in the first string is greater than the second one."
    );
} else if (count2 > count1) {
    console.log("The second one is greater.");
} else {
    console.log("Character does not exist in each string.");
}

// 3. Challenge
var randomNumber = Math.ceil(Math.random() * 1000);
console.log(randomNumber);

if (randomNumber % 3 === 0 && randomNumber % 5 !== 0) {
    console.log("Fizz");
} else if (randomNumber % 5 === 0 && randomNumber % 3 !== 0) {
    console.log("Buzz");
} else if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    console.log("FizzBuzz");
} else {
    console.log("Boom");
}

// 4. Challenge
var replaceString =
    "I find myself reflecting on past adventures, realizing that my greatest discoveries were often right at home, hidden in plain sight, waiting to be appreciated, and truly making them mine.";
var replacedStringResult;
replacedStringResult = replaceString.replaceAll("I", "We");
replacedStringResult = replacedStringResult.replaceAll("my", "our");
replacedStringResult = replacedStringResult.replaceAll("myself", "ourselves");
replacedStringResult = replacedStringResult.replaceAll("mine", "ours");

console.log(replacedStringResult);

// 5. Challenge
var mainString =
    "Exploring the vast universe of code can lead to unexpected discoveries.";
var targetString = "universe";
var includesString = mainString.includes(targetString);

if (includesString !== -1) {
    console.log(targetString + " string is in " + mainString);
} else {
    console.log(targetString + " is not in this " + mainString);
}

// 6. Challenge
// .trim() it will remove spaces from ending and starting of sentence
// .trimEnd() it will remove spaces only from ending of sentence
// .trimStart() it will remove spaces only from starting of sentence
