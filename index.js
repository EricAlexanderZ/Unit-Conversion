// ASSIGN INPUT BOX & LARGE NUMBER DISPLAY TO VARIABLE 
let  userInput = document.getElementById("user_input");

let paraNum = document.getElementById("num"); 

// ASSIGN RESULT PARAGRAPH ID'S 
let lengthPara = document.getElementById("length_result");      // LENGTH RESULT
let volumePara = document.getElementById("volume_result");  // VOLUME RESULT
let massPara = document.getElementById("mass_result");        // MASS RESULT

// ASSIGN LOADED PAGE VAR, AND VALUES.
let m2f = 20 * 3.28;
let f2m =  20 * 0.30;
let l2g = 20 * 0.264;
let g2l = 20 * 3.785;
let k2p = 20 * 2.2046;
let p2k = 20 * 0.454;

let loadNum = 20;
// FUNCTION THAT DISPLAYS  20 ON LARGE DISPLAY NUMBER AND THE CONVERSION 
function initialFun() {
    paraNum.textContent = loadNum;

    lengthPara.textContent = `${loadNum} meters = ${m2f} feet | ${loadNum} feet = ${f2m} meters`;
    volumePara.textContent = `${loadNum} liters = ${l2g} gallons | ${loadNum} gallons = ${g2l} liters`;
    massPara.textContent = `${loadNum} kilos = ${k2p} pounds | ${loadNum} pounds = ${p2k} kilos`;
}
window.addEventListener("load", initialFun);

// FUNCTION THAT LOADS USERS INPUT ONTO LARGE NUMBER DISPLAY UPON TYPING.
function linkUserNum() {
    paraNum.textContent = userInput.value;
}
userInput.addEventListener("input", linkUserNum);

// FUNCTION THAT DISPLAYS RESULT PARAGRAPHS UPON TYPING.
function paraResult() {
    // ASSIGN NUMBER CONVERSION TO VARIABLES 
    let metersToFeet = userInput.value * 3.28;
    let feetToMeters = userInput.value * 0.30;
    let litersToGallons = userInput.value * 0.264;
    let gallonsToLiters = userInput.value * 3.785;
    let kilosToPounds = userInput.value * 2.2046;
    let poundsToKilos = userInput.value * 0.454;

    lengthPara.textContent = `${userInput.value} meters = ${metersToFeet} feet | ${userInput.value} feet = ${feetToMeters} meters`;
    volumePara.textContent = `${userInput.value} liters = ${litersToGallons} gallons | ${userInput.value} gallons = ${gallonsToLiters} liters`;
    massPara.textContent = `${userInput.value} kilos = ${kilosToPounds} pounds | ${userInput.value} pounds = ${poundsToKilos} kilos`;
}
userInput.addEventListener("input", paraResult); 