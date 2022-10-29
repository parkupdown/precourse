const user = "mrko";
const friends = [
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];
const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];
function solution(user, friends, visitors) {
  //먼저 방문자 + 친구의 배열을 만들어야함
  //방문자 user 제외 배열만들기

  // user 친구 찾기

  let userFriends = [];
  friends.forEach((item) => {
    if (item[0] === user) {
      userFriends.push(item[1]);
    }
    if (item[1] === user) {
      userFriends.push(item[0]);
    }
  });

  //친 사 친 찾기

  let friendsExceptUserArr = [];
  friends.forEach((item) =>
    item.forEach((item) => {
      if (friendsExceptUserArr.includes(item) === false && item !== user) {
        friendsExceptUserArr.push(item);
      }
    })
  );

  let notUserFriends = [];
  friendsExceptUserArr.forEach((item) => {
    if (userFriends.includes(item) === false) {
      notUserFriends.push(item);
    }
  });

  // 방문자 배열 정렬

  let visitorsArray = [];

  visitors.forEach((item) => {
    if (
      visitorsArray.includes(item) === false &&
      userFriends.includes(item) === false
    ) {
      visitorsArray.push(item);
    }
  });

  // friends 배열에서 나온횟수찾기

  let allRecommendFriends = [...notUserFriends, ...visitorsArray];

  //두 배열 합치기

  let scoreOfRecmmend = [];
  allRecommendFriends.forEach((item, index) => {
    let i = 0;
    let count = 10;
    for (; i < friends.length; i++) {
      if (friends[i].includes(item)) {
        scoreOfRecmmend.splice(index, 1, count);
        count = count + 10;
      }
    }
  });
  //친사친 포인트

  allRecommendFriends.forEach((item, index) => {
    let i = 0;
    let count = 1;
    for (; i < visitors.length; i++) {
      if (visitors[i] === item) {
        scoreOfRecmmend.splice(index, 1, count);
        count = count + 1;
      }
    }
  });
  //방문 포인트

  let map = new Map();

  for (i = 0; i < allRecommendFriends.length; i++) {
    map.set(allRecommendFriends[i], scoreOfRecmmend[i]);
  }
  let answerArr = [...map];

  answerArr.sort((a, b) => b[1] - a[1]);

  const answer = answerArr.map((item, index) => {
    if (item !== 0 && index < 5) {
      return item[0];
    }
  });
  return answer;
}
solution(user, friends, visitors);
