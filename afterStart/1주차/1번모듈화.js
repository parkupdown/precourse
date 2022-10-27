const pobi = [99, 102];
const crong = [211, 212];
function checkPageNum(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }
  if (pobi[0] === 1 || pobi[1] === 400 || crong[0] === 1 || crong[1] === 400) {
    return -1;
  }
}

function stringfyPage(pobi, crong) {
  const pobiString = pobi.map((item) => String(item));
  const crongString = crong.map((item) => String(item));
  return [pobiString, crongString];
} //이거는 한꺼번에주는게나을듯

function calculationPages(pobiPages, crongPages) {
  let pobiPlus = 0;
  let pobiMultiple = 0;
  let crongPlus = 0;
  let crongMultiple = 0;
  for (i = 0; i < 2; i++) {
    pobiPlus = [...pobiPages[i]].reduce((acc, cur) => {
      return acc + parseInt(cur);
    }, 0);
    pobiMultiple = [...pobiPages[i]].reduce((acc, cur) => {
      return acc * parseInt(cur);
    }, 1);
    crongPlus = [...crongPages[i]].reduce((acc, cur) => {
      return acc + parseInt(cur);
    }, 0);
    crongMultiple = [...crongPages[i]].reduce((acc, cur) => {
      return acc * parseInt(cur);
    }, 1);
  } // 계산
  return [pobiPlus, pobiMultiple, crongPlus, crongMultiple];
}

function findMaxNum(pobiArr, crongArr) {
  const pobiMax = Math.max(...pobiArr);
  const crongMax = Math.max(...crongArr);
  return [pobiMax, crongMax];
}

function resultShow(pobiMax, crongMax) {
  let answer = 0;
  if (pobiMax > crongMax) {
    answer = 1;
  }
  if (pobiMax < crongMax) {
    answer = 2;
  }
  if (pobiMax === crongMax) {
    answer = 0;
  }
  return answer;
}

function problem1(pobi, crong) {
  let pobiArr = [];
  let crongArr = [];

  checkPageNum(pobi, crong);

  const stringfyPageArray = stringfyPage(pobi, crong);

  const calculationResultArray = calculationPages(
    stringfyPageArray[0],
    stringfyPageArray[1]
  );

  pobiArr.push(calculationResultArray[0], calculationResultArray[2]);
  crongArr.push(calculationResultArray[1], calculationResultArray[3]);

  const MaxNumArray = findMaxNum(pobiArr, crongArr);
  const answer = resultShow(MaxNumArray[0], MaxNumArray[1]);
  return answer;
}
problem1(pobi, crong);
