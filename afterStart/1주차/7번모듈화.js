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

// user의 친구 찾기 함수

function findUserFriends(friends) {
  let userFriends = [];
  friends.forEach((friend) => {
    if (friend[0] === user) {
      userFriends.push(friend[1]);
    }
    if (friend[1] === user) {
      userFriends.push(friend[0]);
    }
  });
  return userFriends;
}

// user가 직접적으로는 모르는 친구 배열 반환 함수

function findUnfriendlyFriends(friendsArr) {
  let unfriendlyFriendsrArr = [];
  friendsArr.forEach((friends) =>
    friends.forEach((friend) => {
      if (unfriendlyFriendsrArr.includes(friend) === false && friend !== user) {
        unfriendlyFriendsrArr.push(friend);
      }
    })
  );
  console.log(unfriendlyFriendsrArr);
  return unfriendlyFriendsrArr;
}

//user의 친구의 친구 어레이 찾기

function findNotUserFriend(friends) {
  const unfriendlyFriendsrArr = findUnfriendlyFriends(friends);
  const userFriends = findUserFriends(friends);
  let notUserFriends = [];
  unfriendlyFriendsrArr.forEach((friend) => {
    if (userFriends.includes(friend) === false) {
      notUserFriends.push(friend);
    }
  });
  return notUserFriends;
}

//방문자 중복제거

function deleteOverlapVisitorArray(friends, visitors) {
  let visitorsArray = [];
  const userFriends = findUserFriends(friends);

  visitors.forEach((item) => {
    if (
      visitorsArray.includes(item) === false &&
      userFriends.includes(item) === false
    ) {
      visitorsArray.push(item);
    }
  });
  return visitorsArray;
}

function makeCombinedArr(friends, visitors) {
  const notUserFriends = findNotUserFriend(friends);
  const visitorsArray = deleteOverlapVisitorArray(friends, visitors);
  let combindedArr = [...notUserFriends, ...visitorsArray];

  return combindedArr;
}

//친구의 친구 점수측정
function checkSoreOfFriendsOfFriends(friends, visitors) {
  const combinedArr = makeCombinedArr(friends, visitors);
  let scoreOfFriendsRecommend = [];
  combinedArr.forEach((friend, index) => {
    let i = 0;
    let count = 10;
    for (; i < friends.length; i++) {
      if (friends[i].includes(friend)) {
        console.log(friend);
        scoreOfFriendsRecommend.splice(index, 1, count);
        count = count + 10;
      }
    }
  });
  console.log(scoreOfFriendsRecommend);
  return scoreOfFriendsRecommend;
}

function checkSoreOfVisitor(friends, visitors) {
  let scoreOfFriendsRecommend = checkSoreOfFriendsOfFriends(friends, visitors);
  const combinedArr = makeCombinedArr(friends, visitors);
  console.log(combinedArr);
  combinedArr.forEach((friend, index) => {
    let i = 0;
    let count = 1;
    for (; i < visitors.length; i++) {
      if (visitors[i] === friend) {
        scoreOfFriendsRecommend.splice(index, 1, count);
        count = count + 1;
      }
    }
  });
  return scoreOfFriendsRecommend;
}

//사람과 점수 묶기

function friendsAndRecommendScore(friends, visitors) {
  const scoreOfFriendsRecommend = checkSoreOfVisitor(friends, visitors);
  const combinedArr = makeCombinedArr(friends, visitors);

  let map = new Map();

  for (i = 0; i < combinedArr.length; i++) {
    map.set(combinedArr[i], scoreOfFriendsRecommend[i]);
  }
  return map;
}

function problem7(user, friends, visitors) {
  const friendsAndScoreArr = friendsAndRecommendScore(friends, visitors);

  let answerArr = [...friendsAndScoreArr];

  answerArr.sort((a, b) => b[1] - a[1]);

  const answer = answerArr.map((item, index) => {
    if (item !== 0 && index < 5) {
      return item[0];
    }
  });
  return answer;
}
problem7(user, friends, visitors);
