// 1. Generate a Random User Name
var randomNumber = Math.ceil(Math.random() * 10);
var name;

if (randomNumber >= 1 && randomNumber <= 3) {
    name = "Bob";
} else if (randomNumber >= 4 && randomNumber <= 7) {
    name = "Martin";
} else {
    name = "Jennifer";
}

// 2. Select a Greeting Message Template
// 3. Specific Messages to Print
var randomNumber2 = Math.floor(Math.random() * 5);
var name2 = "Jamshid";
var result1 = `Dear ${name2}, wishing you a day filled with happiness and a year filled with joy.`;
var result2 = `Dear ${name2}, sending you smiles for every moment of your special day.`;
var result3 = `Dear ${name2}, have a wonderful time and a very happy day!`;
var result4 = `Dear ${name2}, hope your special day brings you all that your heart desires!`;
console.log(randomNumber2);

if (randomNumber2 === 1) {
    console.log(result1);
} else if (randomNumber2 === 2) {
    console.log(result2);
} else if (randomNumber2 === 3) {
    console.log(result3);
} else if (randomNumber2 === 4) {
    console.log(result4);
}
