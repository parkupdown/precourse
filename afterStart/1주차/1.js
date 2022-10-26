const pobi = [97, 98];
const crong = [197, 198];

function problem1(pobi, crong) {
  //두번 map 해야겠다
  let pobiArr = [];
  let crongArr = [];
  const pobiString = pobi.map((item) => String(item));
  const crongString = crong.map((item) => String(item));
  for (i = 0; i < 2; i++) {
    let pobiInnerArray = [...pobiString[i]];
    let crongInnerArray = [...crongString[i]];
    let plusSum = 0;
    let multipleSum = 1;
    for (j = 0; j < pobiInnerArray.length; j++) {
      plusSum = plusSum + parseInt(pobiInnerArray[j]);
      multipleSum = multipleSum * parseInt(pobiInnerArray[j]);
    }
    pobiArr.push(plusSum, multipleSum);
    plusSum = 0;
    multipleSum = 1;
    for (k = 0; k < crongInnerArray.length; k++) {
      plusSum = plusSum + parseInt(crongInnerArray[k]);
      multipleSum = multipleSum + parseInt(crongInnerArray[k]);
    }
    crongArr.push(plusSum, multipleSum);
  }
  const pobiMax = Math.max(...pobiArr);
  const crongMax = Math.max(...crongArr);

  if (pobiMax > crongMax) {
    return 1;
  } else if (pobiMax === crongMax) {
    return 0;
  } else if (pobiMax < crongMax) {
    return 2;
  } else {
    return -1;
  }
}
problem1(pobi, crong);
