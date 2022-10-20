let chickenQty = prompt("How much chicken did you buy from the market?, (please put chicken quantity in Gram)")
console.log("You have bought " + chickenQty + " gram chicken from the market");
document.write("<p> </p>You have bought " + chickenQty + " gram chicken from the market <p> ");

let chickenRate = prompt("What is the rate per kg of chicken in the market?");
chickenRate = Number.parseInt(chickenRate);

console.log("Chicken rate per KG is Rs. " + chickenRate + "/-");
document.write("<p> Chicken rate per KG is Rs. " + chickenRate + "/- <p> ");

let chickenPrice = (chickenRate / 100) * chickenQty;

document.write("<h1>You have purchased " + chickenQty + " Gram chicken in Rs." + chickenPrice  + "/- <h1>");
console.log("You have purchased " + chickenQty + " Gram chicken in Rs." + chickenPrice  + "/-");

