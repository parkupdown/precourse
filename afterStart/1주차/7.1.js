const user = "mrko";
const friends = [
  ["donut", "andole"],
  ["donut", "jun"],
  ["donut", "mrko"],
  ["shakevan", "andole"],
  ["shakevan", "jun"],
  ["shakevan", "mrko"],
];

//userFirend찾기
let userAndFrindsArr = [];
let userFriendsArr = [];
let userFriends = []; //[donut,shakevan]
let notUserFriendsArr = [];
let friendOfFriendsArr = [];

function makeUserandFriednsArr(friends, userAndFrindsArr) {
  friends.forEach((item) =>
    item.forEach((item) => {
      userAndFrindsArr.push(item);
    })
  );
}

function findUserFriendsArray(user, friends) {
  friends.forEach((friendsArr) => {
    if (friendsArr.includes(user) === true) {
      userFriendsArr.push(friendsArr);
    }
  });
}

function findUserFriends(userFriendsArr, userFriends, user) {
  userFriendsArr.forEach((doubleArray) =>
    doubleArray.forEach((friend) => {
      if (friend !== user) {
        userFriends.push(friend);
      }
    })
  ); //친구찾음
}
//친구의 친구 배열 찾기

function findFriendOfFriend(
  userAndFrindsArr,
  user,
  userFriends,
  friendOfFriendsArr
) {
  userAndFrindsArr.forEach((item) => {
    if (item !== user && userFriends.includes(item) === false) {
      friendOfFriendsArr.push(item);
    }
  });
  console.log(friendOfFriendsArr);
}

function deleteFriendsOverlap(friendOfFriendsArr) {}

findUserFriendsArray(user, friends);
findUserFriends(userFriendsArr, userFriends, user);
makeUserandFriednsArr(friends, userAndFrindsArr);
findFriendOfFriend(userAndFrindsArr, user, userFriends, friendOfFriendsArr);
