const money = 15000;
function solution(money) {
  let userMoney = money;
  let answer = [];
  const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  coins.forEach((item) => {
    answer.push(Math.floor(userMoney / item));
    userMoney = userMoney % item;
  });
  return answer;
}
solution(money);
