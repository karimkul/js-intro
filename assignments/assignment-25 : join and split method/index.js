// 1. createCamelCase
function createCamelCase(str) {
    let word = str.split(" ");
    let result = "";
    result += word[0][0].toLowerCase() + word[0].slice(1);
    result += word[1][0].toUpperCase() + word[1].slice(1);

    return result;
}
console.log(createCamelCase("hello word")); // Outputs "helloWorld"
console.log(createCamelCase("Hi everyone")); // Outputs "hiEveryone"
console.log(createCamelCase("super Expensive")); // Outputs "superExpensive"
console.log(createCamelCase("Bye Everyone")); // Outputs "byeEveryone"

// 2. replaceSpacesWithUnderscore
function replaceSpacesWithUnderscore(str) {
    return str.split(" ").join("_");
}

console.log(replaceSpacesWithUnderscore("hello world")); // Outputs "hello_world"
console.log(replaceSpacesWithUnderscore("OpenAI GPT-4 rocks")); // Outputs "OpenAI_GPT-4_rocks"

// 3. swapFirstAndLastName
function swapFirstAndLastName(fullName) {
    let name = fullName.split(" ");
    let result = [];
    for (let i = name.length - 1; i >= 0; i--) {
        result.push(name[i]);
    }
    return result.join(", ");
}

console.log(swapFirstAndLastName("Ali Ramazon")); // Outputs "Ramazon, Ali";

// 4. createHashTag
function createHashTag(str) {
    let word = str.split(" ");
    let arr = [];
    arr.push("#");
    for (let i = 0; i < word.length; i++) {
        arr.push(word[i].charAt(0).toUpperCase() + word[i].slice(1));
    }
    return arr.join("");
}

console.log(createHashTag("hello world")); // Outputs "#HelloWorld"
console.log(createHashTag("OpenAI is awesome")); // Outputs "#OpenAIIIsAwesome"
