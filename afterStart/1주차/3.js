//3,6,9 게임
const number = 33;
function solution(number) {
  let count = 0;
  for (i = 1; i <= number; i++) {
    let numArray = String(i).split(""); //나누는함수
    numArray.forEach((item) => {
      if (item === "3" || item === "6" || item === "9") {
        count = count + 1; //판단하는함수
      }
    });
  }
  return count;
}
solution(number);
