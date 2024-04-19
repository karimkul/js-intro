// 1. sumStrings
function sumStrings(str1, str2) {
    var resultNum = parseFloat(str1) + parseFloat(str2);
    return resultNum;
}
// console.log(sumStrings("123", "456"));
// console.log(sumStrings("101", "899"));
// console.log(sumStrings("333", "666"));

// 2.sumDigits
function sumDigits(strIntiger) {
    var sum = 0;
    if (strIntiger[0] !== 0) {
        sum += parseFloat(strIntiger[0]);
    }
    if (strIntiger[1] !== 0) {
        sum += parseFloat(strIntiger[1]);
    }
    if (strIntiger[2] !== 0) {
        sum += parseFloat(strIntiger[2]);
    }
    if (strIntiger[3] !== 0) {
        sum += parseFloat(strIntiger[3]);
    }
    return sum;
}

// console.log(sumDigits("1234")); // Outputs: 10
// console.log(sumDigits("9009")); // Outputs: 18
// console.log(sumDigits("1111")); // Outputs: 4

// 3. multiplyRandomPositions ???????????
function multiplyRandomPositions(digitNum1) {
    var randomIntiger1 = Math.floor(Math.random() * digitNum1.length - 1);
    // console.log(randomIntiger1);
    var randomIntiger2 = Math.floor(Math.random() * digitNum1.length - 1);
    // console.log(randomIntiger2);

    var indexOfStr1 = digitNum1[randomIntiger1];
    // console.log(indexOfStr1);
    var indexOfStr2 = digitNum1[randomIntiger2];
    // console.log(indexOfStr1);

    var result12 = parseFloat(indexOfStr1) * parseFloat(indexOfStr2);

    return result12;
}
// console.log(multiplyRandomPositions("92454"));

// 4. multiplyHalves   ????????
function multiplyHalves(strIntiger) {
    var slicedIntiger = strIntiger / 2;
    console.log(slicedIntiger);
}

multiplyHalves("1234"); // Outputs: 12 * 34 = 408
multiplyHalves("56789"); // Outputs: 56 * 89 = 4984
multiplyHalves("24680"); // Outputs: 246 * 80 = 19680

// 5. isOddStringInteger   ???????
function isOddStringInteger(strIntiger) {
    var lengthOfStrOdd = strIntiger.length % 2 !== 0;
    return lengthOfStrOdd;
}

// console.log(isOddStringInteger("123")); // Outputs: true
// console.log(isOddStringInteger("2468")); // Outputs: false
// console.log(isOddStringInteger("1357")); // Outputs: true

// 6. roundAndConvert
function roundAndConvert(num1) {
    var roundednum1 = Math.round(num1);
    return roundednum1.toString();
}

// console.log(roundAndConvert(3.56)); // Outputs: "4"
// console.log(roundAndConvert(7.1)); // Outputs: "7"
// console.log(roundAndConvert(5.499)); // Outputs: "5"

// 7. formatCurrency  ?????????
function formatCurrency(num) {}

// formatCurrency(1500); // Outputs: "$1500.00"
// formatCurrency(15.378); // Outputs: "$15.38"
// formatCurrency(0.99); // Outputs: "$0.99"

// 8. extractDecimal

// 9. integerToString
function integerToString(num) {
    // var convertToStr = num.toString();
    // return convertToStr;
    return num.toString();
}

// console.log(integerToString(123)); // Outputs: "123"
// console.log(integerToString(-456)); // Outputs: "-456"
// console.log(integerToString(7890)); // Outputs: "7890"

// 10. displayAsPercentage

// 11. convertToFahrenheit
// °F = (°C × 9/5) + 32
function convertToFahrenheit(num) {
    var fahrenheitNum = num * (9 / 5) + 32;
    return fahrenheitNum.toString() + "°" + "F";
}

// console.log(convertToFahrenheit(0)); // Outputs: "32°F"
// console.log(convertToFahrenheit(-20)); // Outputs: "-4°F"
// console.log(convertToFahrenheit(28)); // Outputs: "82.4°F"

// 12. addOrdinalSuffix ??????????????
function addOrdinalSuffix(num) {}

// 13. addTimeSuffix

// 14. formatAsPhone ?????????
function formatAsPhone(num) {
    return num.toString() + "";
}
// console.log(formatAsPhone(1234567890)); // Outputs: "(123) 456-7890"
// console.log(formatAsPhone(9876543210)); // Outputs: "(987) 654-3210"

// 15. convertToCelsius
//°C = (°F − 32) x 5/9
function convertToCelsius(num) {
    var convertToCelsiusNum = (num - 32) * (5 / 9);
    var roundedCelsius = Math.round(convertToCelsiusNum);
    return roundedCelsius.toString() + "." + "0" + "°" + "C";
}

// console.log(convertToCelsius(32)); // Outputs: "0.0°C"
// console.log(convertToCelsius(-4)); // Outputs: "-20.0°C"
// console.log(convertToCelsius(82.4)); // Outputs: "28.0°C"
