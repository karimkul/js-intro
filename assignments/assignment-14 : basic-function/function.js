// 1. Problem
function isOdd(number) {
    var checkOdd = number % 2 !== 0;
    console.log(`Is it odd number? : ${checkOdd}`);
}
isOdd(15); // true
isOdd(6); // false

// 2. Problem
function isEven(number) {
    var checkEven = number % 2 === 0;
    console.log(`Is it even number? : ${checkEven}`);
}
isEven(22); // true
isEven(11); // false

// 3. Problem
function isIncludes(mainString, targetString) {
    var lowerCasedTargetString = targetString.toLowerCase();
    var isIncludesString = mainString.includes(lowerCasedTargetString);

    console.log(isIncludesString);
}
isIncludes("Hello world", "WORLD"); //true
isIncludes("Look here", "there"); //false

// 4. Problem
function minValue(number1, number2) {
    if (number1 < number2) {
        console.log(number1);
    } else if (number1 > number2) {
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

// 7. Problem
function isProductGreater(num1, num2, num3) {
    var product = num1 * num2 * num3;
    var sum = num1 + num2 + num3;
    var result = product > sum;
    console.log(result);
}
isProductGreater(1, 2, 3);
isProductGreater(5, 6, 2);

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

// 9. Problem
function firstHalf(string) {
    var halfIdx = Math.floor(string.length / 2);
    console.log(string.slice(0, halfIdx));
}
firstHalf("hello"); // "he"
firstHalf("four"); // "fo"

// 10. Problem
function getInitials(fullName) {
    var firstSpaceIdx = fullName.indexOf(" ") + 1;
    var lastSpaceIdx = fullName.lastIndexOf(" ") + 1;
    var firstInitial = fullName[0];
    var secondInitial = fullName[firstSpaceIdx];
    var thirdInitial = fullName[lastSpaceIdx];
    var initials = firstInitial + secondInitial + thirdInitial;
    console.log(initials);
}
getInitials("John Fitzgerald Kennedy"); // "JFK"
getInitials("Martin Luther King"); // "MLK"
