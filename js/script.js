// Oppgave 1

function receivingFunction(func) {
    if (typeof func === "function") {
        func();
    }else console.log("I am not a function");
}
function callbackFunction() {
    console.log("I am a callback function");
}
receivingFunction(callbackFunction);

// Oppgave 2

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach((value, index) => {
    console.log(`Prize ${index + 1}: ${value}`);
});

// Oppgave 3

function time() {
    console.log(`I waited ${seconds} seconds before executing`);
}

const seconds = 10;
setTimeout(time, seconds * 1000);

// Oppgave 4

const tid = 1.5;
let start = 0;
function tall() {
    start++;
    console.log(start);
    if (start === 4) {
        clearInterval(timer);
    }
}
const timer = setInterval(tall, tid * 1000);