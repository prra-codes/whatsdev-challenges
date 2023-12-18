// Mon, 18/12/23

// Return Largest Numbers in Arrays
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  const arrMax = [];
  for (let i = 0; i < arr.length; i++) {
    let maxSubArrValue = arr[i][0];

    for (let j = 1; j < arr.length; j++) {
      if (arr[i][j] > maxSubArrValue) {
        maxSubArrValue = arr[i][j];
      }
    }

    arrMax.push(maxSubArrValue);
  }

  return arrMax;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
