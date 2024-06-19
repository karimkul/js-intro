const arrayToObject = function (arr) {
    return {
        country: arr[0],
        population: arr[1],
        language: arr[2],
        gdp: arr[3]
    };
};

console.log(arrayToObject(["USA", 331000000, "English", 21433226]));
