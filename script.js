// script.js

console.clear();
console.log("=== CONDITIONAL EXPRESSIONS AND LOOPS IN JAVASCRIPT ===");

// 1) IF / ELSE IF / ELSE
console.log("\n1) IF / ELSE IF / ELSE");
let age = parseInt(prompt("Enter your age:"));

if (age < 2) {
  console.log("You are an infant.");
} else if (age < 12) {
  console.log("You are a child.");
} else if (age < 18) {
  console.log("You are a teenager.");
} else if (age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}

// 2) NESTED IF - MEDICINE DOSAGE
console.log("\n2) NESTED IF EXAMPLE - MEDICINE DOSAGE");
let dose;

if (age >= 12) {
  dose = 500;
} else if (age >= 2) {
  let weight = parseFloat(prompt("Enter your weight in kg:"));
  dose = weight * 12.5;
  if (dose > 500) {
    dose = 500;
  }
} else {
  dose = 0;
}
console.log("Recommended dose: " + dose + " micrograms.");

// 3) SWITCH - CABIN CLASS
console.log("\n3) SWITCH EXAMPLE - CABIN CLASS");
let cabin = prompt("Enter your cabin class (A, B, or C):").toUpperCase();
switch (cabin) {
  case "A":
    console.log("Cabin A: Top deck with window.");
    break;
  case "B":
    console.log("Cabin B: Top deck without window.");
    break;
  case "C":
    console.log("Cabin C: Windowless cabin under the car deck.");
    break;
  default:
    console.log("Invalid cabin class entered.");
}

// 4) WHILE LOOP - VALID WEIGHT
console.log("\n4) WHILE LOOP - ENTER VALID WEIGHT");
let weightInput = parseFloat(prompt("Enter your weight in kg:"));
while (weightInput <= 0 || isNaN(weightInput)) {
  weightInput = parseFloat(prompt("Invalid. Please enter a positive number for weight:"));
}
console.log("Your valid weight is: " + weightInput + " kg.");

// 5) DO-WHILE LOOP - DICE ROLL
console.log("\n5) DO-WHILE LOOP - DICE ROLL");
let dice;
do {
  dice = Math.floor(Math.random() * 6) + 1;
  console.log("You rolled: " + dice);
} while (dice < 6);
console.log("You rolled a 6 — loop ended!");

// 6) FOR LOOP - EVEN NUMBERS
console.log("\n6) FOR LOOP - EVEN NUMBERS");
let limit = parseInt(prompt("Enter an upper limit to show even numbers up to:"));
for (let i = 0; i <= limit; i += 2) {
  console.log(i);
}

// 7) NESTED FOR LOOP - MULTIPLICATION TABLE
console.log("\n7) NESTED FOR LOOP - MULTIPLICATION TABLE");
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(i + " × " + j + " = " + (i * j));
  }
}

console.log("\n=== END OF PROGRAM ===");
