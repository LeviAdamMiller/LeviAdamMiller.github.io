/*
  Author: Levi Miller
  Date: 2/27/23
  File: program_behavior.js
  Individual Assignment 3 Dataset Scripts
 */
//get access to our buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let numberOfCars = cars.length;
let automaticTransmission = 0;
let manualTransmission = 0;
let numberOfBentleys = 0;

//the index of the current object shown
//on the web page

let index = 0;
//responds to clicks of the "previous" button
display(cars[0]);
previous.onclick = function (event) {
    index--;
    // all ypu have to do for this is to make sure the index isn't negative
    if (index < 0) {
        console.log("You will not get past zero!");
        index++;
    }
    //make sure that index is never less than zero...

    display();
}

//responds to clicks of the "next" button
next.onclick = function (event) {
    index++;

    if (index === numberOfCars - 1) {
        console.log("you have reached the max index");
        index--;
    }
    //make sure that index is never greater than
    //array.length - 1
    // make sure the index isn't too large
    display();
}

//shows the current record in the array of records
//at the position within the index variable
document.getElementById("numberOfElements").innerHTML = numberOfCars;

function display() {

    console.log("Next index is " + index);


    console.log(cars);

    myCar = cars[index];
    let Model = myCar["Identification"]["Model Year"];
    document.getElementById("Model Year").innerHTML = Model;


    let City = myCar["Fuel Information"]["City mpg"];
    document.getElementById("City").innerHTML = City;

    let Highway = myCar["Fuel Information"]["Highway mpg"];
    document.getElementById("Highway").innerHTML = Highway;

    let drive = myCar["Engine Information"]["Driveline"];
    document.getElementById("drive").innerHTML = drive;


    let Horsepower = myCar["Engine Information"]["Engine Statistics"]["Horsepower"];
    document.getElementById("Horsepower").innerHTML = Horsepower;

    let transmission = myCar["Identification"]["Classification"];
    document.getElementById("transmission").innerHTML = transmission;

    let Torque = myCar["Engine Information"]["Engine Statistics"]["Torque"];
    document.getElementById("Torque:").innerHTML = Torque;

}

for (let i = 0; i <= numberOfCars - 1; i++) {

    myCar = cars[i];
    if (myCar["Identification"]["Classification"].includes('Automatic transmission')) {

        automaticTransmission++;
    } else {
        if (myCar["Identification"]["Classification"].includes('Manual transmission')) {
            manualTransmission++;
        }
    }

    if (myCar["Identification"]["Model Year"].includes('Bentley')) {
        numberOfBentleys++;

    }


}

percentageOfBentleysAlmost = 100 * numberOfBentleys;
percentageOfBentleys = percentageOfBentleysAlmost / 5076;

console.log(percentageOfBentleys);


document.getElementById('automaticTransmission').innerHTML = automaticTransmission;
document.getElementById('manualTransmission').innerHTML = manualTransmission;
document.getElementById('numberOfBentleys').innerHTML = numberOfBentleys;
document.getElementById('percentageOfBentleys').innerHTML = percentageOfBentleys;