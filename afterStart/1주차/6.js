const forms = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]; //
function solution(forms) {
  let answer = [];
  let overlabNameIndex = [];
  let checkNameArray = [];
  const crewName = forms.map((item) => item[1]); //기능 1
  //제이엠, 제이슨, 워니, 엠제이, 이제엠
  const sortCrewName = crewName.map((item) => [...item].sort()); //기능 2
  const joinCrewName = sortCrewName.map(
    (
      item // 기능 3
    ) => item.filter((item, index) => index < 2)
  );
  joinCrewName.forEach((item) => {
    let Name = "";
    item.forEach((item) => {
      Name = Name + item;
    }); //기능 4
    checkNameArray.push(Name);
  });

  //판단하는 기능 5
  checkNameArray.forEach((item, index) => {
    if (checkNameArray.lastIndexOf(item) !== index) {
      overlabNameIndex.push(index);
    }
  });
  if (
    checkNameArray.indexOf(checkNameArray[checkNameArray.length - 1]) !==
    checkNameArray.length - 1
  ) {
    overlabNameIndex.push(checkNameArray.length - 1);
  }

  //최종 기능 6

  for (j = 0; j < overlabNameIndex.length; j++) {
    answer.push(forms[j][0]);
  }
  return answer;
}
solution(forms);
