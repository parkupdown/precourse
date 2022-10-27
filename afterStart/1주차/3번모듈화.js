const number = 33;
function numberToArray(number, numArray) {
  let i = 0;
  for (; i <= number; i++) {
    numArray.push(String(i).split(""));
  }
}

function countClap(numArray, count) {
  numArray.forEach((numArray) =>
    numArray.forEach((num) => {
      if (num === "3" || num === "6" || num === "9") {
        count = count + 1;
      }
    })
  );
  return count;
}
function problem3(number) {
  let numArray = [];
  let count = 0;
  numberToArray(number, numArray);
  const answer = countClap(numArray, count);
  return answer;
}
problem3(number);
