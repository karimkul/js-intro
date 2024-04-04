// 1. .length() method

var post1 =
    "Imagine you are creating a feature for a social media application that compares the length of two posts to determine which one is longer, or if they are of equal length. This could be part of a larger function that, for instance, rewards users whose posts are more detailed.";
var post2 =
    "You're helping to create a tutorial for a beginner's coding workshop that focuses on string manipulation. The goal is to demonstrate how to access specific characters in a string and explain the concept of string indexing and length.";
var comparisonResult;
comparisonResult = post1.length === post2.length;
console.log(comparisonResult); //false

comparisonResult = post1.length > post2.length;
console.log(comparisonResult); //true

comparisonResult = post1.length < post2.length;
console.log(comparisonResult); //false

comparisonResult = post1.length <= post2.length;
console.log(comparisonResult); //false

comparisonResult = post1.length >= post2.length;
console.log(comparisonResult); //true
console.log("------------------------------");

// 2 index[] method
// accessing the first second and third characters of the greeting string
var greeting = "Hello, world!";
console.log(greeting[0]); //H
console.log(greeting[1]); //e
console.log(greeting[2]); //l

// accessing  the  last and  the one before characters of the greeting string
console.log(greeting[11]); //d
console.log(greeting[12]); //!

console.log(greeting.slice(11, 12)); //d
console.log(greeting.slice(-1)); //!
