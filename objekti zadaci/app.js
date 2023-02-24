// The function giveMeFive accepts 1 parameter, obj, which is an object.

// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

// At the end, return your array.

// You should use for..in in your code, otherwise your solution may not pass this kata.

function findFiveLetterWords(obj) {
  let arr = [];

  for (let key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }

  return arr;
}

const obj = {
  key: "merisa",
  merisa: "key",
  objKeeeey: "value",
  objke: "value",
};
//2.
function howManySmaller(arr, n) {
  const roundedArr = arr.map((el) => Number(el.toFixed(2))); // round each element to 2 decimal places
  let count = 0;
  for (let el of roundedArr) {
    if (el < n) {
      count++;
    }
  }
  return count;
}
//3
function colorOf(r, g, b) {
  const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex; // prepend "0" if necessary
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
