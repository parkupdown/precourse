const pobi = [99, 102];
const crong = [211, 212];

function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }
  if (pobi[0] === 1 || pobi[1] === 400 || crong[0] === 1 || crong[1] === 400) {
    return -1;
  }
  let pobiArr = [];
  let crongArr = [];
  const pobiString = pobi.map((item) => String(item));
  const crongString = crong.map((item) => String(item));
  for (i = 0; i < 2; i++) {
    const pobiPlus = [...pobiString[i]].reduce((acc, cur) => {
      return acc + parseInt(cur);
    }, 0);
    const pobiMultiple = [...pobiString[i]].reduce((acc, cur) => {
      return acc * parseInt(cur);
    }, 1);
    const crongPlus = [...crongString[i]].reduce((acc, cur) => {
      return acc + parseInt(cur);
    }, 0);
    const crongMultiple = [...crongString[i]].reduce((acc, cur) => {
      return acc * parseInt(cur);
    }, 1);
    pobiArr.push(pobiPlus, pobiMultiple);
    crongArr.push(crongPlus, crongMultiple);
  }
  const pobiMax = Math.max(...pobiArr);
  const crongMax = Math.max(...crongArr);
  if (pobiMax > crongMax) {
    return 1;
  } else if (pobiMax < crongMax) {
    return 2;
  } else if (pobiMax === crongMax) {
    return 0;
  } else {
    return -1;
  }
  //예외처리 추가로 더 필요
}
