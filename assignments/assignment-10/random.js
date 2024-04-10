// 1. Between 1 and 10
var problemOne = Math.ceil(Math.random() * 10);
console.log(problemOne); //Generate between 1 and 10 all includes

// 2. Between 1 and 100
var problemTwo = Math.ceil(Math.random() * 100);
console.log(problemTwo); //Generate between 1 and 100 all includes

// 3. Between 50 and 100
var problemThree = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(problemThree); //Generate between 1 and 100 all includes formula : Math.floor(Math.random() * (max - min + 1)) + min

// 4. Between -10 and 10 ????????
var problem4 = Math.ceil(Math.random() * 20) - 10;
console.log(problem4);

// 5. Between -100 and 100
var problem5 = Math.ceil(Math.random() * 200) - 100;
console.log(problem5);

// 6. Between 1000 and 2000
var problem6 = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
console.log(problem6); //Generate between 1000 and 2000 all includes

// 7. Between -1000 and 0
var problem7 = Math.ceil(Math.random() * -1000);
console.log(problem7);

// 8. Between 1 and 1000
var problem8 = Math.ceil(Math.random() * 1000);
console.log(problem8); //Generate between 1 and 1000 all includes

// 9. Between -500 and 500
var problem9 = Math.ceil(Math.random() * 1000) - 500;
console.log(problem9);

// 10. Between 10000 and 20000
var problem10 = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;
console.log(problem10); //Generate between 1000 and 2000 all includes
