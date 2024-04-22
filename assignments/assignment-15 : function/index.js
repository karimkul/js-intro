function isEven(num) {
    return num % 2 === 0;
}

// 1. sumUp
function sumUp(num1, num2, num3, num4, num5) {
    var sum = 0;
    if (isEven(num1)) sum += num1;
    if (isEven(num2)) sum += num2;
    if (isEven(num3)) sum += num3;
    if (isEven(num4)) sum += num4;
    if (isEven(num5)) sum += sum;
    return sum;
}
console.log(sumUp(2, 3, 4, 1, 2)); //8
console.log(sumUp(10, 3, 10, 1, 10)); //30

// 2. max

function max(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(max(100, 90, 120)); //120

// 3. min

function min(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    } else if (num2 < num1 && num2 < num3) {
        return num2;
    } else {
        return num3;
    }
}
console.log(min(51, 14, 11)); //11

// 4. longestString
function longestString(str1, str2, str3) {
    var cleanStr1 = str1.replaceAll(" ", "");
    var cleanStr2 = str2.replaceAll(" ", "");
    var cleanStr3 = str3.replaceAll(" ", "");
    var maxLength = max(cleanStr1.length, cleanStr2.length, cleanStr3.length);
    if (maxLength === cleanStr1) return cleanStr1;
    if (maxLength === cleanStr2) return cleanStr2;
    return cleanStr3;
}
console.log(longestString("space here", "hello", "world")); // "space here"
console.log(longestString("wussap", "computer", "telecomunication")); // "telecomunication"

// 5. shortestString
function shortestString(string1, string2, string3) {
    var cleanStr1 = string1.replace("?", "");
    var cleanStr2 = string2.replace("!", "");
    var cleanStr3 = string3.replace(".", "");
    var minLength = min(cleanStr1.length, cleanStr2.length, cleanStr3.length);
    if (minLength === cleanStr1.length) return string1;
    if (minLength === cleanStr2.length) return string1;
    return cleanStr3;
}

console.log(shortestString("hello?", "wo!rld", "yes.")); // Outputs: "yes"
console.log(shortestString("how are you?", "I am fine!", "What about you?")); // Outputs: "I am fine"
console.log(shortestString("this is a test?", "short!", "even shorter.")); // Outputs: "short!"
