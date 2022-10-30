const cryptogram = "browoanoommnaon";

function solution(cryptogram) {
  const stringArray = [...cryptogram]; //스트링의 배열화
  let compareArray = [];

  for (i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === compareArray[compareArray.length - 1]) {
      compareArray.pop();
    }
    if (stringArray[i] !== compareArray[compareArray.length - 1]) {
      compareArray.push(stringArray[i]);
    }
  }
  //기능1

  return compareArray.join("");
  //기능2
}
solution(cryptogram);
//없어져 만나면 그럼 하나씩 함수에 옮겨 그리고
// 옮기고 그 함수랑 비교를 해
