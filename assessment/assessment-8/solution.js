// 1. Challenge
function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// console.log(isPrime(2)); // Should return true
// console.log(isPrime(3)); // Should return true
// console.log(isPrime(4)); // Should return false
// console.log(isPrime(29)); // Should return true

// 2. Challenge
function listPrimes(n) {
    var result = 0;

    for (var i = 2; i < n; i++) {
        if (n % i === 0) result += i.toString();
    }
    return result;
}
console.log(listPrimes(10)); // Should return "2, 3, 5, 7"
listPrimes(20); // Should return "2, 3, 5, 7, 11, 13, 17, 19"
listPrimes(1); // Should return ""
listPrimes(2); // Should return "2"
