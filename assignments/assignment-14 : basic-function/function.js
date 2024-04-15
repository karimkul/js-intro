// 1. Problem
function isOdd(number) {
    var checkOdd = number % 3 === 0;
    console.log(`Is it odd number? : ${checkOdd}`);
}
isOdd(15); // true
isOdd(5); // false

// 2. Problem
function isEven(number) {
    var checkEven = number % 2 === 0;
    console.log(`Is it even number? : ${checkEven}`);
}
isEven(2); // true
console.log("______________________________");

// 3. Problem  ??????
function isIncludes(mainString, targetString) {
    var isIncludesString = mainString.includes(targetString);

    console.log(isIncludesString);
}
isIncludes("Hello world", "WORLD");
isIncludes("Look here", "here");

// 4. Problem
function minValue(number1, number2) {
    if (number1 > number2) {
        console.log(number1);
    } else if (number1 < number2) {
        console.log(number2);
    } else if (number1 === number2) {
        console.log(number1, number2);
    }
}
minValue(15, 20); //15
minValue(20, 20); //20 20
minValue(25, 20); //25

// 5. Problem
function maxValue(number1, number2) {
    if (number1 > number2) {
        console.log(number1);
    } else if (number1 < number2) {
        console.log(number2);
    } else if (number1 === number2) {
        console.log(`${number1}, ${number2}`);
    }
}
maxValue(25, 20); //25
maxValue(15, 15); //15 15
maxValue(5, 10); //10

// 6. Problem
function power(base, exponent) {
    var powerNum = base ** exponent;
    console.log(powerNum);
}
power(10, 3); //1000
power(2, 5); //32
power(5, 0); //10987
console.log("______________________________");

// 7. Problem
// function isProductGreater(num1,num2,num3){
//     var sum =
// }
console.log("______________________________");

// 8. Problem
function swapFirstAndLastChars(string) {
    var firstLatterOfString = string[0];
    var middleLattersOfString = string.slice(1, -1);
    var lastLatterOfString = string.slice(-1);
    var result =
        lastLatterOfString + middleLattersOfString + firstLatterOfString;
    console.log(result);
}
swapFirstAndLastChars("hello"); //oellh
swapFirstAndLastChars("abcd"); //dbca
console.log("______________________________");

// 9. Problem ??
function firstHalf(string) {
    var firstHalfOfString = string.slice(0, 2);
    console.log(firstHalfOfString);
}
firstHalf("hello"); // "he"
firstHalf("four"); // "fo"

// 10. Problem
function getInitials(fullName) {
    var getFirstLatter = fullName[0];
    var getSecondLatterInd = fullName.indexOf(" ");
    var getSecondLatter = fullName[getSecondLatterInd + 1];
    var getThirdLatter = fullName.slice(-1, -4);
    console.log(getFirstLatter, getSecondLatter, getThirdLatter);
}
getInitials("John Fitzgerald Kennedy");
