// 돈을 화폐단위로 나누고 나머지를 이어서 계속 나눠주는함수
function solution(money) {
  const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let userMoney = money;
  let answer = [];

  coins.forEach((item) => {
    answer.push(Math.floor(userMoney / item));
    userMoney = userMoney % item;
  });

  return answer;
}
solution(money);
