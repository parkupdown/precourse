const pobi = [97, 98];
const crong = [197, 198];

function problem1(pobi, crong) {
  //두번 map 해야겠다
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
  const pobiMax = Math.pobiMax(...pobiArr);
  const crongMax = Math.pobiMax(...crongArr);
  if (pobiMax > crongMax) {
    return 1;
  } else if (pobiMax < crongMax) {
    return 2;
  } else if (pobiMax === crongMax) {
    return 0;
  } else {
    return -1;
  }
}
problem1(pobi, crong);
