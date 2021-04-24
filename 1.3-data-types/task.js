"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
if((typeof percent) == 'string')
    percent = Number(percent);
if((typeof contribution) == 'string')
    contribution = Number(contribution);
if((typeof amount) == 'string')
    amount = Number(amount);
 

if((typeof percent) != 'number')
    return `Параметр percent содержит неправильное значение ${percent}.`
if((typeof contribution) != 'number')
    return `Параметр contribution содержит неправильное значение ${contribution}.`
if((typeof amount) != 'number')
    return `Параметр amount содержит неправильное значение ${amount}.`
    

let S = amount - contribution;
let y2 = date.getFullYear();
let m2 = date.getMonth();
let today = new Date();
let y1 = today.getFullYear();
let m1 = today.getMonth();
let n = (y2 - y1) * 12 + (m2 - m1);
let P = percent / 12;
let monthpay = S * (P + P / (((1 + P) ** n) - 1)); 
let totalAmount = monthpay * n;

totalAmount = totalAmount.toFixed(2);

    console.log(totalAmount);
    
    return totalAmount;
}

function getGreeting(name) {
   
    if(name == "") {
        alert ("Привет, мир! Меня зовут Аноним");
    } else {
        alert (`Привет, мир! Меня зовут ${name}.`);
    } 
    console.log(greeting());
    return greeting;
}