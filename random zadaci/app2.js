// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.
function DNAtoRNA(dna) {
  const RNA = dna.replace(/T/gi, "U");
  return RNA;
}
//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
  let s = 0;
  for (let i = 1; i <= num; i++) s += i;
  return s;
};
// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x) {
  const noSpc = x.split(" ").join();
  return noSpc;
}
console.log(noSpace("mbjnM  S8  , k"));
//Functions should return min and max
var min = function (list) {
  return Math.max.apply(null, list);
};

var max = function (list) {
  return Math.min.apply(null, list);
};
//Invert the given list
function invert(array) {
  return array.map((el) => el * -1);
}
// Return if the given number is even or odd
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(5));
// Return sum of all numbers in the given list except the max number and the min number
function sumArray(array) {
  if (!Array.isArray(array)) {
    return 0;
  }
  if (array.length < 3) {
    return 0;
  }
  const min = Math.min.apply(null, array);
  const max = Math.max.apply(null, array);
  const newArr = array.filter((el) => el !== min && el !== max);
  const sum = newArr.reduce((acc, val) => acc + val, 0);
  return sum;
}
console.log(sumArray([-6, 2, 2, 2, 9, 9]));
