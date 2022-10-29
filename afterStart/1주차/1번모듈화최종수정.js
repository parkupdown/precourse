const firstBook = [101, 102];
const secondBook = [211, 212];

function checkBookPageNum(book) {
  if (book[1] - book[0] !== 1) {
    return true;
  }
  if (book[0] === 1 || book[1] === 400) {
    return true;
  }
  return false;
}

function stringfyBookPage(book) {
  const bookString = book.map((item) => String(item));
  console.log(bookString);
  return bookString;
}

function plusAndMultiPages(book) {
  const bookString = stringfyBookPage(book);

  let [bookPagePlus, bookPageMultiple] = [0, 0];
  let i = 0;
  for (; i < 2; i++) {
    bookPagePlus = [...bookString[i]].reduce((acc, cur) => {
      return acc + parseInt(cur);
    }, 0);
    bookPageMultiple = [...bookString[i]].reduce((acc, cur) => {
      return acc * parseInt(cur);
    }, 1);
  }
  return [bookPagePlus, bookPageMultiple];
}

function pushSumOfBooks(book) {
  const [bookPagePlus, bookPageMultiple] = plusAndMultiPages(book);
  let bookSumArr = [];
  bookSumArr.push(bookPagePlus, bookPageMultiple);
  return bookSumArr;
}

function findMaxNum(SumOfBookPageArr) {
  const bookMax = Math.max(...SumOfBookPageArr);
  return bookMax;
}

function problem1(firstBook, secondBook) {
  if (
    checkBookPageNum(firstBook) === true ||
    checkBookPageNum(secondBook) === true
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
}

problem1(firstBook, secondBook);
