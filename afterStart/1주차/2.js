const cryptogram = "browoanoommnaon";

function solution(cryptogram) {
  //먼저 배열로 만들자
  const stringArray = [...cryptogram];
  let compareArray = [];
  //한번에 검사하기
  for (i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === compareArray[compareArray.length - 1]) {
      compareArray.pop();
      //compareArray 는변했지만
      //stringArray는 변하지않아서
    } else if (stringArray[i] !== compareArray[compareArray.length - 1]) {
      compareArray.push(stringArray[i]);
    }
    //r이 들어감
    console.log(compareArray);
  }
}
solution(cryptogram);
//없어져 만나면 그럼 하나씩 함수에 옮겨 그리고
// 옮기고 그 함수랑 비교를 해
