// TASK 1
const movie = {
    title: "Titanic",
    director: "James Cameron",
    releaseYear: 1997,
    genre: "romance",
    rating: 4.8
};

// TASK 2
console.log(movie.title);
console.log(movie.director);
console.log(movie.releaseYear);
console.log(movie.genre);
console.log(movie.rating);

console.log(movie["title"]);
console.log(movie["director"]);
console.log(movie["releaseYear"]);
console.log(movie["genre"]);
console.log(movie["rating"]);

// TASK 3
console.log(movie.producer); //Output: undefined

// TASK 4
movie.rating = 5;
console.log(movie.rating);

// TASK 5
movie.boxOffice = "$2,200,000,000";
console.log(movie.boxOffice);

// TASK 6
delete movie.boxOffice;
console.log(movie.boxOffice);

// Extra Challenge
const movieTitanic = function (obj) {
    return `The movie ${obj.title} was directed by ${obj.director} and was released in ${obj.releaseYear}. It is a ${obj.genre} film with a rating of ${obj.rating}.`;
};
console.log(movieTitanic(movie));
