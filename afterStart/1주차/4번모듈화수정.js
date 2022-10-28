const word = "I Love You";

function alphabetGather() {
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
  const lowerWord = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return [lowerWord, upperWord];
}

function reverseWord() {
  const [lowerWord, upperWord] = alphabetGather();
  const revLowerCase = [...lowerWord].reverse();
  const revUpperCase = [...upperWord].reverse();
  return [revLowerCase, revUpperCase];
}

function wordToArray(word) {
  let wordArrays = word.split("");
  return wordArrays;
}

function checkLowerCase(word) {
  let lowerchecked = wordToArray(word);
  const [revLowerCase, revUpperCase] = reverseWord();
  const [lowerWord, upperWord] = alphabetGather();
  lowerchecked.forEach((item, index) => {
    if (item !== " " && item.toLowerCase() === item) {
      let wordLowerIndex = lowerWord.indexOf(item);

      lowerchecked[index] = revLowerCase[wordLowerIndex];
    }
  });
  return lowerchecked;
}

function checkUpperCase(word) {
  let upperchecked = checkLowerCase(word);
  const [lowerWord, upperWord] = alphabetGather();
  const [revLowerCase, revUpperCase] = reverseWord();
  upperchecked.forEach((item, index) => {
    if (item !== " " && item.toUpperCase() === item) {
      let wordUpperIndex = upperWord.indexOf(item);
      upperchecked[index] = revUpperCase[wordUpperIndex];
      //대문자찾기
    }
  });
  return upperchecked;
}

function arrayToString(word) {
  let wordJoined = checkUpperCase(word);
  wordJoined = wordJoined.join("");
  return wordJoined;
}

function problem4(word) {
  const answerWord = arrayToString(word);
  return answerWord;
}
problem4(word);
