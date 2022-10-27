const cryptogram = "browoanoommnaon";

function deleteOverlab(cryptogtramArray, compareArray) {
  let i = 0;
  for (; i < cryptogtramArray.length; i++) {
    if (cryptogtramArray[i] === compareArray[compareArray.length - 1]) {
      compareArray.pop();
    } else if (cryptogtramArray[i] !== compareArray[compareArray.length - 1]) {
      compareArray.push(cryptogtramArray[i]);
    }
  }
}

function resultShow(compareArray) {
  const answer = compareArray.join("");
  return answer;
}

function problem2(cryptogram) {
  let cryptogramArray = [...cryptogram];
  let compareArray = [];
  deleteOverlab(cryptogramArray, compareArray);
  const answer = resultShow(compareArray);

  return answer;
}
problem2(cryptogram);
