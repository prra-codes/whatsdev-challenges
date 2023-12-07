// Wed, 6/12/23

// Find the Longest Word in a String

// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  let strArr = str.split(" ");

  let longestWord = "";
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longestWord.length) {
      longestWord = strArr[i];
    }
  }

  return longestWord.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
