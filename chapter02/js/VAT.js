/*
Calculate VAT and final price
*/
let price = Number(prompt("What's the price?"));

let tax = price * .206;
let totalPrice = price + tax;
alert(`Total price with tax: $${totalPrice}`);
