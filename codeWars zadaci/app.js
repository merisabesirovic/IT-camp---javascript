// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

const orderedCount = function (text) {
  const result = [];
  for (let i = 0; i < text.length; i++) {
    let counter = 1;
    for (let j = i + 1; j < text.length; j++) {
      if (text[i] === text[j]) counter++;
    }
    if (!result.some(([char, count]) => char === text[i])) {
      result.push([text[i], counter]);
    }
  }
  return result;
};
// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
function formatWords(words) {
  if (!words || words.length === 0) {
    return "";
  }

  const filteredWords = words.filter((word) => word.trim() !== "");
  if (filteredWords.length === 0) {
    return "";
  }

  if (filteredWords.length === 1) {
    return filteredWords[0];
  }

  const lastWord = filteredWords.pop();
  return filteredWords.join(", ") + " and " + lastWord;
}
