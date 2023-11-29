// Wed, 29/11/23

// Return true is the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forwards and backwards, ignoring punctuation, case, and spacing.

function palindrome(str) {
  let lowercase = str.toLowerCase();
  //   console.log(lowercase);

  let reversedStr = "";

  for (let i = lowercase.length - 1; i >= 0; i--) {
    reversedStr += lowercase[i];
  }

  if (lowercase === reversedStr) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("hannah"));
