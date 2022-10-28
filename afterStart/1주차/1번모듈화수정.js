const firstBook = [101, 102];
const secondBook = [211, 212];

//페이지 검사
function checkBookPageNum(firstBook, secondBook) {
  if (
    firstBook[1] - firstBook[0] !== 1 ||
    secondBook[1] - secondBook[0] !== 1
  ) {
    return true;
  }
  if (
    firstBook[0] === 1 ||
    firstBook[1] === 400 ||
    secondBook[0] === 1 ||
    secondBook[1] === 400
  ) {
    return true;
  }
  return false;
}

//배열요소를 string으로 변경함수
function stringfyBookPage(firstBook, secondBook) {
  const firstBookString = firstBook.map((item) => String(item));
  const secondBookString = secondBook.map((item) => String(item));
  return [firstBookString, secondBookString];
}
//각 배열요소를 더하고 곱해주는 함수
function plusAndMultiPages(firstBook, secondBook) {
  const [firstBookString, secondBookString] = stringfyBookPage(
    firstBook,
    secondBook
  );
  let [firstBookPlus, firstBookMultiple, secondBookPlus, secondBookMultiple] = [
    0, 0, 0, 0,
  ];
  let i = 0;
  for (; i < 2; i++) {
    firstBookPlus = [...firstBookString[i]].reduce((acc, cur) => {
      return acc + parseInt(cur);
    }, 0);
    firstBookMultiple = [...firstBookString[i]].reduce((acc, cur) => {
      return acc * parseInt(cur);
    }, 1);
    secondBookPlus = [...secondBookString[i]].reduce((acc, cur) => {
      return acc + parseInt(cur);
    }, 0);
    secondBookMultiple = [...secondBookString[i]].reduce((acc, cur) => {
      return acc * parseInt(cur);
    }, 1);
  }
  return [firstBookPlus, firstBookMultiple, secondBookPlus, secondBookMultiple];
}

function pushSumOfBooks(firstBook, secondBook) {
  let firstBookSumArr = [];
  let secondBookSumArr = [];
  const [firstBookPlus, firstBookMultiple, secondBookPlus, secondBookMultiple] =
    plusAndMultiPages(firstBook, secondBook);

  firstBookSumArr.push(firstBookPlus, firstBookMultiple);
  secondBookSumArr.push(secondBookPlus, secondBookMultiple);

  return [firstBookSumArr, secondBookSumArr];
}

function findMaxNum(firstBook, secondBook) {
  const [firstBookSumArr, secondBookSumArr] = pushSumOfBooks(
    firstBook,
    secondBook
  );
  const firstBookMax = Math.max(...firstBookSumArr);
  const secondBookMax = Math.max(...secondBookSumArr);
  return [firstBookMax, secondBookMax];
}

function problem1(firstBook, secondBook) {
  if (checkBookPageNum(firstBook, secondBook) === true) {
    return -1;
  }

  const [firstBookMax, secondBookMax] = findMaxNum(firstBook, secondBook);
  if (firstBookMax > secondBookMax) {
    return 1;
  }
  if (firstBookMax < secondBookMax) {
    return 2;
  }
  if (firstBookMax === secondBookMax) {
    return 0;
  }
}
problem1(firstBook, secondBook);
