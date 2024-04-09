// 1. Math.sqrt() ildiz ostidan chiqarish.
var number = 36;
// console.log(Math.sqrt(number)); //6
// console.log(Math.sqrt(441)); //21
// console.log(Math.sqrt(144)); //12
// console.log("__________________");

// 2. Math.pow() it has 2 arguments, cub
var num = 2;
// console.log(num ** 10); //1024
// console.log(Math.pow(num, 2)); //4
// console.log(Math.pow(num, 5)); //32
// console.log(Math.pow(num, 8)); //256
// console.log("__________________");

// 3. Math.round() Rounds a number to the nearest integer.
var float1 = 4.7;
var float2 = 4.49;
var float3 = 4.5;
var float4 = 4.51;
var float5 = 4.99999;
var float6 = -4.32;
var float7 = -4.51;
console.log(Math.round(float1)); //5
console.log(Math.round(float2)); //4
console.log(Math.round(float3)); //5
console.log(Math.round(float4)); //5
console.log(Math.round(float5)); //5
console.log(Math.round(float6)); //5
console.log(Math.round(float7)); //5
console.log("__________________");

// 4. Math.floor() Returns the largest integer less than or equal to a specified number
var float1 = 4.99999999;
var float2 = 4.49;
var float3 = 4.5;
var float4 = 4.51;
var float5 = 4.1;
var float6 = 5.1;
console.log(Math.floor(float1)); //4
console.log(Math.floor(float2)); //4
console.log(Math.floor(float3)); //4
console.log(Math.floor(float4)); //4
console.log(Math.floor(float5)); //4
console.log(Math.floor(float6)); //5
console.log("__________________");

// 5. Math.ceil() Returns the smallest integer greater than or equal to a specified number
var float1 = 4.1;
var float2 = 4.49;
var float3 = 4.5;
var float4 = 4.51;
var float5 = 4.99999;
var float6 = -4.32;
var float7 = -4.999999;
var float8 = -4.32;
console.log(Math.ceil(float1)); //5
console.log(Math.ceil(float2)); //5
console.log(Math.ceil(float3)); //5
console.log(Math.ceil(float4)); //5
console.log(Math.ceil(float5)); //5
console.log(Math.ceil(float6)); //-4
console.log(Math.ceil(float7)); //-4
console.log(Math.ceil(float8)); //-4
console.log("__________________");

// 6. Math.abc()
//
var negative = -5;
var positive = negative * -1;
console.log(positive);

console.log(Math.abs(negative));

// 7. Math.random() Generates 0 up to 1 but 1 is not include
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random() === Math.random());
console.log(Math.random());
// Minimum number of Math.random() is 0
// Maximum number of Math.random() is 0.999999999 never hits 1

// Generate a number between 0 and 9
var randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

// Generate a number between 1 and 10
var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

// Generate a number between 0 and 100
var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
