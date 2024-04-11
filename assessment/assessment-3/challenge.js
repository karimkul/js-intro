// Challenge-1
var removeSpace = "I Love JavaScript";
var newRemoveSpace = removeSpace.replaceAll(" ", "");
// console.log(newRemoveSpace);

//Challenge-2
// 1. Solution
var javascript = "javascript";
var newJavascript = javascript.replace("j", "J");
var firstSolution = newJavascript.replace("s", "S");
console.log(firstSolution);

// 2. Solution
var javascript = "javascript";
var part1 = javascript[0].toUpperCase();
var part2 = javascript.slice(1, 4);
var part3 = javascript[4].toUpperCase();
var part4 = javascript.slice(5);
var secondSolution = part1 + part2 + part3 + part4;
console.log(secondSolution);

// Challenge-3
// 1. Solution
var fullName = "Will Smith";
var initial = fullName[0];
var initial2 = fullName[5];
var resultInitial = initial.concat(initial2);
// console.log(resultInitial);

// 2. Solution
var fullName2 = "Borak Obama";
var initialFirst = fullName2[0];
var initialSecond = fullName2.indexOf(" ");
var resultInitial2 = initialFirst + fullName2[initialSecond + 1];
console.log(resultInitial2);

//Challenge-4
var alphabet = "abcdefghijklmnopqrstuvwxyz";
// var firstLatterOfMyName = "j";
var firstLatterName = "j";
var firstLatterNameIdx = alphabet.indexOf(firstLatterName);
var alphabetWithoutMyNameFirstCharacter =
    alphabet.slice(0, firstLatterNameIdx) +
    alphabet.slice(firstLatterNameIdx + 1);

console.log(alphabetWithoutMyNameFirstCharacter);

//Challenge-5
var completeSentence = "The quick brown fox jumps over the lazy dog.";

//Challenge-6
var randomString = "I live in NY. NY is rainyaaaa";
var randomChar = "a";
var ramdomStringLength = randomString.length;
var randomStringWithoutRandomChar = randomString.replaceAll(randomChar, "");
var randomCharCount = ramdomStringLength - randomStringWithoutRandomChar.length;
console.log(randomCharCount);
