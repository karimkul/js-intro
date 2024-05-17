// 1. sumExclusiveRange
function sumExclusiveRange(min, max) {
    var result = 0;
    if (min > max) {
        return "Not valid range";
    }
    for (var i = min + 1; i < max; i++) {
        result += i;
    }
    return result;
}
console.log(sumExclusiveRange(1, 5)); //9
console.log(sumExclusiveRange(5, 1)); //"Not valid range"
console.log(sumExclusiveRange(3, 7)); //15

//2. sumEvenNumbers
function sumEvenNumbers(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumEvenNumbers(10)); //30
console.log(sumEvenNumbers(7)); //12
console.log(sumEvenNumbers(15)); //56

// 3. factorial
function factorial(n) {
    for (var i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}
console.log(factorial(5)); // Outputs: 120 (5*4*3*2*1)
console.log(factorial(3)); // Outputs: 6 (3*2*1)
console.log(factorial(7)); // Outputs: 5040 (7*6*5*4*3*2*1)

// 5. sumDivisibleByFour
function sumDivisibleByFour(min, max) {
    var sum = 0;
    for (var i = min; i <= max; i++) {
        if (i % 4 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumDivisibleByFour(1, 10)); // Outputs: 12 (4+8)
console.log(sumDivisibleByFour(4, 20)); // Outputs: 60 (4+8+12+16+20)
console.log(sumDivisibleByFour(3, 15)); // Outputs: 24 (4+8+12)

// 4. sumUpToMax
function sumUpToMax(num1, num2, num3) {
    var maxNum = num1;
    if (num2 > maxNum) {
        maxNum = num2;
    }
    if (num3 > maxNum) {
        maxNum = num3;
    }
    if (maxNum <= 0) {
        return 0;
    }
    var sum = 0;
    for (var i = 1; i <= maxNum; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumUpToMax(3, 5, 2)); // Outputs: 15 (sum of numbers from 1 to 5)
console.log(sumUpToMax(10, 5, 3)); // Outputs: 55 (sum of numbers from 1 to 10)
console.log(sumUpToMax(1, 2, 3)); // Outputs: 6 (sum of numbers from 1 to 3)
console.log(sumUpToMax(-1, -2, -3)); // Outputs: 0 (no positive numbers up to the max)
console.log(sumUpToMax(7, 0, 5)); // Outputs: 0 (presence of zero invalidates the sum) ??????
