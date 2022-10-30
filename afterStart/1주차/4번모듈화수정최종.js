const word = "I Love You";

//알파벳을 불러오는 함수
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

// 알파벳의 index를 reverse해주는 함수
function reverseWord(lowerWord, upperWord) {
  const revLowerCase = [...lowerWord].reverse();
  const revUpperCase = [...upperWord].reverse();

  return [revLowerCase, revUpperCase];
}
// string을 배열로 바꿔주는 함수
function wordToArray(word) {
  let wordArrays = word.split("");

  return wordArrays;
}
// 공백이 아닌 소문자인지 판단하는 함수
function checkLowerCase(alphabet) {
  if (alphabet !== " " && alphabet.toLowerCase() === alphabet) {
    return true;
  }
}
// 공백이아닌 대문자인지 판단하는 함수
function checkUpperCase(alphabet) {
  if (alphabet !== " " && alphabet.toUpperCase() === alphabet) {
    return true;
  }
}

// 소문자와 대문자에 따라 배열의 인덱스를 반대로 전환하는 함수
function convertAlphabet(word) {
  const [lowerWord, upperWord] = alphabetGather();
  const [revLowerCase, revUpperCase] = reverseWord(lowerWord, upperWord);

  let convertedWordArray = wordToArray(word);

  convertedWordArray.forEach((alphabet, index) => {
    if (checkLowerCase(alphabet) === true) {
      let wordLowerIndex = lowerWord.indexOf(alphabet);
      convertedWordArray[index] = revLowerCase[wordLowerIndex];
    }

    if (checkUpperCase(alphabet) === true) {
      let wordUpperIndex = upperWord.indexOf(alphabet);
      convertedWordArray[index] = revUpperCase[wordUpperIndex];
    }
  });

  return convertedWordArray;
}

// 배열을 스트링으로 전환하는 함수
function arrayToString(wordArray) {
  wordArray = wordArray.join("");

  return wordArray;
}

//인덱스가 반대로 전환된 함수를 받아 string형태로 리턴하는함수
function problem4(word) {
  const convertedWordArray = convertAlphabet(word);
  const answerWord = arrayToString(convertedWordArray);

  return answerWord;
}
problem4(word);
