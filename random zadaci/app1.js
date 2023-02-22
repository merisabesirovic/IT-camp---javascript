//rearrange the digits to create the highest possible number.
function descendingOrder(n) {
  const digits = n.toString().split("").map(Number);
  digits.sort((a, b) => b - a);
  return Number(digits.join(""));
}
// For a given string s find the character c (or C) with longest consecutive repetition and return:
function longestRepetition(s) {
  let max = 0;
  let char;
  for (let i = 0; i < s.length - 1; i++) {
    let br = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) br++;
    }
    if (max < br) {
      max = br;
      char = s[i];
    }
  }
  return [`${char}`, max];
}
console.log(longestRepetition("merisaaaaa"));
// In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors
// Task:
// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".
function rpsls(pl1, pl2) {
  if (pl1 === pl2) return `nereseno!`;
  const rules = {
    Scissors: ["Paper", "Lizard"],
    Paper: ["Rock", "Spock"],
    Rock: ["Lizard", "Paper", "Scissors"],
    Lizard: ["Spock", "Paper"],
    Spock: ["Scissors", "Rock"],
  };
  if (rules[pl1].includes(pl2)) return `Player 1 je pobednik!`;
  else return `Player 2 je pobednik!`;
}
console.log(rpsls("Scissors", "Scissors"));
// Create function that will count number of inversions in the array of integers
function countInversions(array) {
  let br = 0;
  let pom;
  const newArray = array.slice(); // create a copy of the original array
  for (let i = 0; i < newArray.length - 1; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[i] > newArray[j]) {
        pom = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = pom;
        br++;
      }
    }
  }
  return br;
}
console.log(countInversions([2, 1, 3]));
