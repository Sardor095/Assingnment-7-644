/*eslint-env browser*/

//STEP 1
const choice = prompt("choose a month");
const dayMonth = function (month, year) {
    if (choice == 2) {
        return ("in February is 28 day but each 4 years there can be 29 day!");
    } else {
        return new  Date(year,choice,0).getDate();
    }
};
console.log(dayMonth(1,2020));
//STEP 2
const newDay = prompt("Enter a date");
const date = new Date (newDay);
console.log(date);
console.log("Month name:", date.toLocaleDateString('it-IT', {month: 'long'}));
//STEP 3
const thatDay = prompt("Pick a date");
const weekend = function(thatDay){
    var data = new Date(thatDay);

    if(data.getDay() == 6 || data.getDay() == 0) {
        return "weekend";
    }else {
        return "weekday";
    }
};

console.log(thatDay + " is a " + weekend(thatDay));

//STEP 4
const kun = function() {
    let hafta = new Date();
    hafta.setDate(hafta.getDate()-1);
    return hafta.toLocaleString("default",{week: "long"});
}
console.log("yesterday was: " + kun());

//STEP 5

const dayThing = new Date();
const otherDay = dayThing.toLocaleString("default", {weekday: 'long'});
console.log(otherDay);

const birinchi = otherDay.slice(0,1);
console.log(birinchi);

const toDay = new Date();
let anotherDay = prompt("Enter a date", toDay);
const weekDay = new Date(anotherDay);
console.log(weekDay.toLocaleString('default', {week: 'narrow'}));