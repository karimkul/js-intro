// 1 Template literal method.
var part1 = "The greatest glory in";
var part2 = "living lies not in";
var part3 = "never falling, but in";
var part4 = "rising every time";
var part5 = "we fall.";
var author = " - Nelson Mandela";

var result = `${part1} ${part2} ${part3} ${part4} ${part5} ${author}`;
console.log(result);

// 2 .concat method
var result2 = part1.concat(
    " ",
    part2,
    " ",
    part3,
    " ",
    part4,
    " ",
    part5,
    " ",
    author
);
console.log(result2);

// 3 Use the + operator
var result3 =
    part1 +
    " " +
    part2 +
    " " +
    part3 +
    " " +
    part4 +
    " " +
    part5 +
    " " +
    author;
console.log(result3);

// 4 Using assignment operator
var result4;
var result4 = part1;
result4 += " " + part2;
result4 += " " + part3;
result4 += " " + part4;
result4 += " " + part5;
result4 += " " + author;

console.log(result4);
