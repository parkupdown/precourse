export default function MakeComputerNum() {
  let numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let computerNum = [];
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * 9);

    if (computerNum.includes(numarr[random])) {
      i = i - 1;
    } else if (computerNum.includes(numarr[random]) === false) {
      computerNum.push(numarr[random]);
    }
  }
  return computerNum.join("");
}
