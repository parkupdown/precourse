const cryptogram = "browoanoommnaon";

function problem2(cryptogram) {
  let cryptogramArray = [...cryptogram];
  let compareArray = [];
  let i = 0;

  for (; i < cryptogramArray.length; i++) {
    if (cryptogramArray[i] === compareArray[compareArray.length - 1]) {
      compareArray.pop();
    } else if (cryptogramArray[i] !== compareArray[compareArray.length - 1]) {
      compareArray.push(cryptogramArray[i]);
    }
  }
  return compareArray.join("");
}
problem2(cryptogram);
