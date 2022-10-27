const word = "I Love You";

function solution(word) {
  const upperWord = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const lowerWord = upperWord.map((item) => item.toLowerCase());

  //순서바꾸기 기능1
  const revUpperCase = [...upperWord].reverse();
  const revLowerCase = [...lowerWord].reverse();
  // 기능 2
  const wordArrays = word.split("");
  //이제 이게 소문자인지 대문자인지 판단
  const answerArray = wordArrays.map((item) => {
    if (item === " ") {
      return " ";
    }
    //공백옮기기
    else if (item.toLowerCase() === item) {
      let wordLowerIndex = lowerWord.indexOf(item);
      return revLowerCase[wordLowerIndex];
    }
    //소문자찾기
    else if (item.toUpperCase() === item) {
      let wordUpperIndex = upperWord.indexOf(item);
      console.log(wordUpperIndex);
      return revUpperCase[wordUpperIndex];
      //대문자찾기
    }
  });
  return answerArray;
}
solution(word);
