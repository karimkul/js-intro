// 1.
var result1 = "hello".includes("e").toUpperCase(); //invalid chain
// Because .includes() return boolean so we can not use .toUpperCase() to boolean. It works for only string.

// 2.
var result2 = "world".indexOf("o").concat("cean"); //invalid chain
// .indexOf() returns number and we can not concat number to string.

// 3.
var result3 = "goodbye".endsWith("e").replace("e", "a"); //invalid chain
// .endsWith() returns boolean so we can not use .replace() to boolean. It work for only string.

// 4.
var result4 = "example".slice(0, 3).indexOf("a"); //valid chain
// We can slice tring then find index of sliced string. Output will be 2

// 5. ???????
//
var result5 = "space "
    .trimStart()
    .trimEnd()
    .toUpperCase()
    .slice(-1)
    .toLowerCase(); //valid chain
// We can trimStart and trimEnd then change it to UupperCase and slice it last character and change it to loweCase

// 6.
var result6 = "boolean".startsWith("b").toString().replace("true", "yes"); //valid chain
// .startWith() return boolean but .toString() changes boolean to string then we can .replace() it. outcome will be  "yes".

// 7.
var result7 = "JavaScript".toLowerCase().trim().concat(" is fun"); //valid chain
// .toLowerCase() change it to lowercase and if we .trim() it output will be "javascript" even it does not has space... then we can .concat() it and result will be "javascript is fun".

// 8.
var result8 = "Learning".slice(0, 4).toUpperCase().endsWith("N"); //valid chain
// We can .slice() the string then change it .toupperCase() output will be "LEAR". If it .endsWith("N")? output is false.

// 9.
var result9 = " Hello, World! ".trim().replace("World", "Everyone"); //valid chain
// We can .trim() starting and ending spaces of the string then .replace("World", "Everyone") it, output will be "Hello, Everyone".

// 10.
var result10 = "Data".concat(" Analysis").trimStart().toLowerCase(); //valid chain
// We can .concat() string to string then .trimStart() it and change it to .toLowerCase(). Output will be "data analysis".

// 11.
var result11 = "Search".indexOf("e").toString().slice(0, 1); //valid chain
// .indexOf() returns number and we can change number to sting with .toString() then we will .slice() it output is "1".

// 12.
var result12 = "coding".toUpperCase().startsWith("C"); // valid chain
// We can change the string .toUpperCase() and it is asking if it .startWith() output will be true.

// 13.
var result13 = "text".toUpperCase().includes(5); //valid chain
// Change the string .toUpperCase() then it is asking if it .includes(). Output will be false.

// 14.   ?????????????????????????????
var result14 = "number".indexOf("n").startsWith("0"); //valid chain
// .indexOf("n") returns 0. If it .startsWith("0") and output will be true.

// 15.
var result15 = "trim".trimEnd().length.concat(" characters"); //invalid chain
// length returns number. We can not concat number to string.

// 16. ???????????????
var result16 = "ReplaceAll"
    .replaceAll("l", "ll")
    .indexOf("ll")
    .toString()
    .trim();
//

// 17.
var result17 = "find me".toUpperCase().includes("FIND"); //valid chain
// .toUpperCase() change string to upperCase then it is asking if it .includes(). Output will be true

// 18.
var result18 = " space ".trim().trimStart().trimEnd().length.toString(); //valid chain
// We can use trim, trimStart, trimEnd even it does not has spaces it will return "space". Calculate length and change it to string output will be "5".

// 19.
var result19 = "EndsWith".toLowerCase().endsWith("swith"); //valid chain
// We can change string to lowerCase and it is asking if it .endsWith(). Outout will be true

// 20.
var result20 = "multiple words".slice(0, 8).trim().toUpperCase(); //valid chain
// We can slice the string then trim it and change it to upperCase output will be "MULTIPLE"
