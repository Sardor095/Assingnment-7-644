/*eslint-env browser*/

//STEP 1
var name = prompt("Write your name!");
var nameLength = name.length;
alert("Your name containes " + nameLength + ' letters!');
// STEP 2
const name1 = prompt("Write your name one more time please!");
const pickOne = prompt("Pick a number between 1 and " + name1.length);
alert("On number " + pickOne + " you have letter " + '"' + name1[pickOne - 1] + '"' + " in you name");
// STEP 3
const firstName = prompt("What is your name?");
const lastName = prompt("What is your last name");
alert("Your name : " + firstName + " " + lastName);
//STEP 4
const fox = "The quick brown fox jumps over the lazy dog!";
const word = function (ltr) {
    return ltr.trim().split(" ");
};
console.log(word(fox));
const foxArray = word(fox);
alert("Number of the word FOX is " + foxArray.indexOf("fox"));
//STEP 5
const fox1 = "the quick brown fox jumps over the lazy fox";
const word1 = function (ltr) {
    return ltr.trim().split(" ");
};
console.log(word1(fox1));
const foxArray1 = word1(fox1);
alert("The number of the last instance of FOX is " + foxArray1.lastIndexOf("fox"));
//STEP 6
const fox2 = "The quick brown fox jumps over the lazy dog";
const name2 = prompt("What is your name?");
const instade = fox2.replace("the lazy dog", name2);
alert(instade);
//STEP 7
const fox3 = "'The quick brown fox jumps over the lazy dog'";
const word3 = prompt("enter a word from " + fox3);
const word4 = function (words) {
    return words.trim().split(" ");
};
console.log(word4(fox3));
const wordArray = word4(fox3);
alert("The chocen word " + '"' +  word3 + '"' + " on the number " + (wordArray.indexOf(word3)+1) + " position of the phrase " + '"' + fox3 + '"');
//STEP 8
const fox4 = "The quick brown fox jumps over the lazy dog";
const old_string = fox4;
const new_string = old_string.substr(-12).toUpperCase();
alert(new_string);

//STEP 9
const fox5 = '                   THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG             ';
const lowerCase = fox5.trim();
console.log(lowerCase.toLowerCase());
alert(lowerCase.toLowerCase());

//STEP 10
const fox6 = lowerCase.toLowerCase();

alert(fox6.charAt(0).toUpperCase() + fox6.slice(1));