const cryptogram = "browoanoommnaon";

//string을 배열로 바꿔주는 함수
function stringToArray(array) {
  return [...array];
}

//배열 원소의 중복을 검사하고 제거해주는함수
function problem2(cryptogram) {
  let cryptogramArray = stringToArray(cryptogram);
  let compareArray = [];
  let i = 0;

  for (; i < cryptogramArray.length; i++) {
    if (cryptogramArray[i] === compareArray[compareArray.length - 1]) {
      compareArray.pop();
    } else if (cryptogramArray[i] !== compareArray[compareArray.length - 1]) {
      compareArray.push(cryptogramArray[i]);
    }
  }

  return compareArray.join("");
}
problem2(cryptogram);
