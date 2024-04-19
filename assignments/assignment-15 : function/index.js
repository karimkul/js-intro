// 1. sumUp
function sumUp(num1, num2, num3, num4, num5) {
    var total = 0;
    if (num1 % 2 === 0) {
        total += num1;
    }
    if (num2 % 2 === 0) {
        total += num2;
    }
    if (num3 % 2 === 0) {
        total += num3;
    }
    if (num4 % 2 === 0) {
        total += num4;
    }
    if (num5 % 2 === 0) {
        total += num5;
    }

    return total;
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
    if (str1.length > str2.length && str1.length > str3.length) {
        return str1;
    } else if (str2.length > str1.length && str2.length > str3.length) {
        return str2;
    } else {
        return str3;
    }
}
console.log(longestString("space here", "hello", "world")); // "space here"
console.log(longestString("wussap", "computer", "telecomunication")); // "telecomunication"

// 5. shortestString
