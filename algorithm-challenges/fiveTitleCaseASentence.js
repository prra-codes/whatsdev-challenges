// Thu, 7/12/23

// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let strArr = str.toLowerCase().split(" ");

  let capitalizedArr = [];

  for (let i = 0; i < strArr.length; i++) {
    let capitalizedWord = strArr[i][0].toUpperCase() + strArr[i].slice(1);
    capitalizedArr.push(capitalizedWord);
  }

  const capitalizedStr = capitalizedArr.join(" ");
  return capitalizedStr;
}

console.log(titleCase("I'm a little tea pot"));
