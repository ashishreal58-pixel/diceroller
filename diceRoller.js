// diceRoller.js
// Random Dice Generator using the built-in crypto module

const crypto = require("crypto");

// Generates a cryptographically secure random integer between 1 and 6
function rollDice() {
  // randomInt(min, max) -> min inclusive, max exclusive
  return crypto.randomInt(1, 7);
}

// Simulate a single roll
console.log("=== Single Dice Roll ===");
console.log("Dice Rolled:", rollDice());

// Simulate multiple dice rolls using a loop
console.log("\n=== Simulating 10 Dice Rolls ===");
const numberOfRolls = 10;

for (let i = 1; i <= numberOfRolls; i++) {
  const value = rollDice();
  console.log(`Roll ${i}: Dice Rolled: ${value}`);
}
