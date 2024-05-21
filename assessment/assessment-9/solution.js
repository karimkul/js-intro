// 4.

function generatePatternedString(n) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    let result = "";

    for (let i = 0; i < n; i++) {
        if (i % 4 < 3) {
            result += letters[Math.floor(Math.random() * letters.length)];
        } else {
            result += digits[Math.floor(Math.random() * digits.length)];
        }
    }

    return result;
}

console.log(generatePatternedString(7)); // Output might look like "xaz4bnc"
console.log(generatePatternedString(10)); // Output might look like "tkc4qwe9rt"

// 5.

function generatePatternedArray(n) {
    const symbols = "!, ?, /, +, -";
    const alphanums =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let array = [];

    for (let i = 0; i < n; i++) {
        if (i % 7 < 5) {
            var symbol = symbols[Math.floor(Math.random() * symbols.length)];
            array.push(symbol);
        } else {
            var chars = alphanums[Math.floor(Math.random() * alphanums.length)];
            array.push(chars);
        }
    }

    return array;
}

console.log(generatePatternedArray(10)); // Outputs ['!', '?', '+', '/', '-', '3', 'e', '!', '?', '+']
console.log(generatePatternedArray(12)); // Outputs ['!', '?', '+', '/', '-', '3', 'e', '!', '?', '+', '!', '!']
