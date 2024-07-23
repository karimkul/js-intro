// 1. characterPairs
function characterPairs(str) {
    let pairs = [];
    for (let i = 0; i < str.length; i++) {
        let char1 = str[i];
        for (let j = i + 1; j < str.length; j++) {
            let char2 = str[j];
            pairs.push(char1 + char2);
        }
    }
    return pairs;
}

// console.log(characterPairs("abc")); // Expected output: ['ab', 'ac', 'bc']
// console.log(characterPairs("abcd")); // Expected output: ['ab', 'ac', 'ad', 'bc', 'bd', 'cd']

// 2. divisibleByThreePairSum
function divisibleByThreePairSum(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) % 3 === 0) {
                result.push([i, j]);
            }
        }
    }
    return result;
}

// console.log(divisibleByThreePairSum([1, 2, 3, 4, 5]));
// // Expected output: [[0, 1], [1, 3], [0, 4], [3, 4]]

// console.log(divisibleByThreePairSum([3, 6, 9, 12]));
// // Expected output: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]

// 3. sumOfPairs
function sumOfPairs(nums, target) {
    let sum = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                sum.push([nums[i], nums[j]]);
            }
        }
    }
    return sum;
}

// console.log(sumOfPairs([1, 2, 3, 4, 5], 5));
// // Expected output: [[1, 4], [2, 3]]

// console.log(sumOfPairs([10, 20, 30, 40, 50], 50));
// // Expected output: [[10, 40], [20, 30]]

// 4. checkPrime
function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(checkPrime(7));
// // Expected output: true

// console.log(checkPrime(4));
// // Expected output: false

// console.log(checkPrime(13));
// // Expected output: true

// 5. primeRange
// function primeRange(arr)

// primeRange([10, 20]);
// // Expected output: { primes: [11, 13, 17, 19], count: 4 }

// primeRange([1, 10]);
// Expected output: { primes: [2, 3, 5, 7], count: 4 }

// 6. allSubstrings

function allSubstrings(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substring = str.slice(i, j);
            result.push(substring);
        }
    }
    return result;
}

console.log(allSubstrings("abc"));
// Expected output: ['a', 'ab', 'abc', 'b', 'bc', 'c']

console.log(allSubstrings("abcd"));
// Expected output: ['a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd']
