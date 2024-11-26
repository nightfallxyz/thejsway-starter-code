/*
Convert a temperature from Celsius to Fahrenheit degrees
*/
let fahrenheit = Number(prompt("What's the temp?"));
const celsius = (fahrenheit - 32) * 5 / 9;
alert(`In Celsius: ${celsius}`);