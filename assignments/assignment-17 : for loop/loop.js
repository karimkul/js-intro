// 1. sumExclusiveRange
function sumExclusiveRange(min, max) {
    var result = 0;
    for (var i = min + 1; i < max; i++) {
        result += i;
    }
    if (min > max) {
        return "Not valid range";
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

// 4. sumUpToMax ?????????
function sumUpToMax(num1, num2, num3) {}

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
