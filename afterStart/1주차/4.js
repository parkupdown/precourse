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
    } else if (item.toLowerCase() === item) {
      //소문자
      let wordLowerIndex = lowerWord.indexOf(item);
      console.log(wordLowerIndex);
      return revLowerCase[wordLowerIndex];
    } else if (item.toUpperCase() === item) {
      //대문자
      let wordUpperIndex = upperWord.indexOf(item);
      console.log(wordUpperIndex);
      return revUpperCase[wordUpperIndex];
    }
  });
  return answerArray;
}
solution(word);
