// Mon, 27/11/23

// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string

function reverseString(str) {
  let reversedStr = str.split("").reverse().join("");
  return reversedStr;
}

//another method

function reverseStringTwo(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

console.log(reverseStringTwo("hello"));
