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
  //먼저 친구를 찾아야한다.
  //친구를 찾고 그 친구의 친구를 찾아야한다.
  //점수를 체크하고
  //visitors의 점수를 최종적으로 더해준다.
  //그리고 이제 점수별로 5명을 뽑아 정답을 제출한다.
  //친구 list를 먼저만들자
  let userFriendsArray = [];
  friends.forEach((userFriends) =>
    userFriends.forEach((userFirend) => {
      if (userFirend === user) {
        userFriendsArray.push(...userFriends);
      }
    })
  ); //user가 포함된 배열 찾기 ["donut", "mrko"],["shakevan", "mrko"],
  //user 제외 친구찾기
  let friendsArray = userFriendsArray.filter((item) => item !== user);
  //["donut,"shakevan"]

  //userIndex찾기

  let userIndex = [];
  friends.forEach((userFriends, userFriendsIndex) =>
    userFriends.forEach((userFriend) => {
      if (userFriend === user) {
        userIndex.push(userFriendsIndex);
      }
    })
  );
  //user제외 frieds 배열
  let exceptFriends = [];

  friends.forEach((userFriends, index) => {
    userFriends.forEach((userFirend) => {
      if (userIndex.includes(index) === false) {
        exceptFriends.push(userFriends);
      }
    });
  });
  const set = new Set(exceptFriends);

  let exceptFriendsNotOverlap = [...set];
  console.log(exceptFriendsNotOverlap);
  //친구의 친구
}
solution(user, friends, visitors);
