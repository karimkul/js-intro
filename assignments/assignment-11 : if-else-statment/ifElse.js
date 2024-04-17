// 1. Password Correctness Check
var correctPassword = "abdullajon123";
var userInputPassword = "Abdullajon123";

if (correctPassword === userInputPassword) {
    console.log("Password is correct");
} else {
    console.log("Password is incorrect");
}

// 2. Age Verification for Content Access
var requiredAge = 18;
var userAge = 17;

if (userAge >= requiredAge) {
    console.log("You have access to the content.");
} else console.log("Access restricted. You must be 18 years or older.");

// 3. Checking Input Length
var userName = "Jami";

if (userName.length > 5) {
    console.log("Username is valid.");
} else {
    console.log("Username must be at least 5 characters long.");
}

// 4. Simple Quiz
var correctAnswer = "123";
var usersAnswer = "123";

if (usersAnswer.toLowerCase() === correctAnswer.toUpperCase()) {
    console.log("Correct! You may proceed.");
} else {
    console.log("Incorrect answer. Please try again.");
}
