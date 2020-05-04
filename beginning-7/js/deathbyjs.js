/*eslint-env browser*/

//STEP 1

const hola = "spanishisamazinglanguage";
hayot = Array.from(hola);
crash = hayot.sort();
console.log(crash.toString().replace(/,/g, ""));

//STEP 2

const words = prompt("Enter words");

function capitalWord(words) {
    let enter = words.toLowerCase().split(' ');
    console.log(enter);
    for (let i = 0; i < enter.length; i++) {
        enter[i]= enter[i].charAt(0).toUpperCase() + enter[i].substring(1);
    }

    return enter.join(' ');
}

console.log(capitalWord(words));

//STEP 3

var phrase0 = prompt("Enter magic word Gandalf");
var letters = ["a", "e", "i", "o","u"];
var numLetter = 0;

function counter(text) {
    for(let letter of text.toLowerCase()) {
        if(letters.includes(letter)) {
            numLetter++;
        }
    }

    return numLetter;

}

console.log("In this phrase " + counter(phrase0) + " vowels ");

//STEP 4

var any = Math.random().toString(30).substr(3);
console.log("Generates the string: " + any);

var anything = Math.random().toString(36).substring(2, 10);
console.log("Another generator: " + anything);

//STEP 5

var vatan = prompt("Name countries and separate by comma please");

function longestCountry(vatan) {
    let longest = vatan.split(", ").sort(function(one, two) {
        return two.length - one.length
    });

    return longest[0];

}

console.log("And the winner of the 'Longest Contry Name' is: " + longestCountry(vatan));
