//3,6,9 게임
const number = 33;
function solution(number) {
  let count = 0;
  for (i = 1; i <= number; i++) {
    let numArray = String(i).split("");
    numArray.forEach((item) => {
      if (item === "3" || item === "6" || item === "9") {
        count = count + 1;
      }
    });
  }
  return count;
}
solution(number);
