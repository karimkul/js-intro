// const library = [
//     {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         yearPublished: 1960,
//         genres: ["Fiction", "Classic", "Literature"],
//         ratings: [
//             { user: "Alice", score: 5 },
//             { user: "Bob", score: 4 }
//         ]
//     },
//     {
//         title: "1984",
//         author: "George Orwell",
//         yearPublished: 1949,
//         genres: ["Dystopian", "Science Fiction"],
//         ratings: [
//             { user: "Alice", score: 5 },
//             { user: "Charlie", score: 4 }
//         ]
//     }
// ];

const students = [
    {
        name: "Alice",
        age: 20,
        grade: "A",
        courses: ["Math", "Science", "Literature"]
    },
    { name: "Bob", age: 22, grade: "B", courses: ["History", "Math", "Art"] },
    {
        name: "Charlie",
        age: 23,
        grade: "C",
        courses: ["Biology", "Chemistry", "Physics"]
    }
];

for (let i = 0; i < students.length; i++) {
    let result = "";
    for (let j = 0; j < students[i].courses.length; j++) {
        let currentStr = students[i].courses[j];
        if (currentStr.length > result.length) {
            result = currentStr;
        }
    }
    console.log(`${students[i].name}'s longest course name is: ${result}`);
}
