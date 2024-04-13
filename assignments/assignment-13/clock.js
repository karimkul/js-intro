// Random Time Generation
var totalSeconds = Math.floor(Math.random() * 86400);

//Time Conversion
var hours = Math.floor(totalSeconds / 3600);
var modSeconds = totalSeconds % 3600;
var minutes = Math.floor(modSeconds / 60);
var seconds = modSeconds % 60;

//Format
if (hours < 10) {
    hours = "0" + hours;
}
if (minutes < 10) {
    minutes = "0" + minutes;
}
if (seconds < 10) {
    seconds = "0" + seconds;
}
var timeStamp = `${hours}:${minutes}:${seconds}`;
console.log(timeStamp);

//Greeting Message Based on Time
if (hours < 12) {
    console.log("Good morning!");
} else if (hours < 17) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
