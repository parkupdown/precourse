const firstBook = [101, 102];
const secondBook = [211, 212];

//유효한 페이지인지 확인
function checkBookPageError(book) {
  if (book[1] - book[0] !== 1) {
    return true;
  }
  if (book[0] === 1 || book[1] === 400) {
    return true;
  }

  return false;
}
// 입력된 배열의 숫자 원소를 string으로 변환시켜주는 함수
function stringfyBookPageArr(book) {
  const stringBookPageArr = book.map((item) => String(item));

  return stringBookPageArr;
}
// 배열의 각 원소의 자릿수를 더한 값과 곱한값을 리턴하는 함수
function plusAndMultiPages(book) {
  const stringBookPageArr = stringfyBookPageArr(book);
  let [bookPageSumOfPlus, bookPageSumOfMultiple] = [0, 0];
  let i = 0;

  for (; i < 2; i++) {
    bookPageSumOfPlus = [...stringBookPageArr[i]].reduce((acc, cur) => {
      return acc + parseInt(cur);
    }, 0);
    bookPageSumOfMultiple = [...stringBookPageArr[i]].reduce((acc, cur) => {
      return acc * parseInt(cur);
    }, 1);
  }

  return [bookPageSumOfPlus, bookPageSumOfMultiple];
}

// 더한 값과 곱한 값을 하나의 배열에 넣어주는 함수
function pushSumOfBooks(book) {
  const [bookPageSumOfPlus, bookPageSumOfMultiple] = plusAndMultiPages(book);
  let sumOfBookPageArr = [];

  sumOfBookPageArr.push(bookPageSumOfPlus, bookPageSumOfMultiple);

  return sumOfBookPageArr;
}

// 배열에서 최댓값을 찾아주는 함수
function findMaxNum(book) {
  const SumOfBookPageArr = pushSumOfBooks(book);
  const bookMax = Math.max(...SumOfBookPageArr);

  return bookMax;
}

// 값을 받아 그 값에 따른 결과를 출력하는함수
function problem1(firstBook, secondBook) {
  if (
    checkBookPageError(firstBook) === true ||
    checkBookPageError(secondBook) === true
  ) {
    return -1;
  }
  const firstBookSumArr = pushSumOfBooks(firstBook);
  const secondBookSumArr = pushSumOfBooks(secondBook);

  const firstBookMax = findMaxNum(firstBookSumArr);
  const secondBookMax = findMaxNum(secondBookSumArr);
  if (firstBookMax > secondBookMax) {
    return 1;
  }
  if (firstBookMax < secondBookMax) {
    return 2;
  }
  if (firstBookMax === secondBookMax) {
    return 0;
  }

  return -1;
}

problem1(firstBook, secondBook);
