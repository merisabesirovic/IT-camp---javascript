// Domaci:
// 34. Write a JavaScript function to get nth largest element from an unsorted array. Go to the editor

// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89

// 39. Write a JavaScript function to filter false, null, 0 and blank values from an array. Go to the editor

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

// 16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

// 3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
// 1.

function nth(arr, i) {
  arr.sort((a, b) => b - a);
  return arr[i - 1];
}
console.log(nth([0, 5, 9, 3, 1], 1));
// 9,5,3,1,0
// 2.
function filterFalse(arr) {
  const filtered = arr.filter(
    (el) => el !== false && el !== null && el !== 0 && el !== ""
  );
  return filtered;
}
console.log(filterFalse([58, "", "abcd", true, null, false, 0]));
// 3.
function swap(obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  let swapped = {};
  for (let i = 0; i < keys.length; i++) {
    swapped[values[i]] = keys[i];
  }
  return swapped;
}
console.log(swap(student));
// 4.
function length(obj) {
  const length = Object.keys(obj).length;
  return length;
}
console.log(length(student));
