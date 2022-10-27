const forms = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]; //
function crewNameArr(forms) {
  const crewNameArr = forms.map((name) => name[1]);
  return crewNameArr;
}

function sortCrewNameArr(crewNameArr) {
  const sortCrewNameArr = crewNameArr.map((name) => [...name].sort());

  return sortCrewNameArr;
}

function joinCrewNameArr(sortCrewNameArr) {
  const joinCrewName = sortCrewNameArr.map((name) =>
    name.filter((item, index) => index < 2)
  ); //순서대로 정렬 후 2글자만 중복 체크
  return joinCrewName;
}

function checkOverlapCheck(joinCrewName, checkNameArray) {
  joinCrewName.forEach((nameArr) => {
    let nameSum = "";
    nameArr.forEach((name) => {
      nameSum = nameSum + name;
    }); //기능 4
    checkNameArray.push(nameSum);
  });
}

function calculation(checkNameArray, overlabNameIndex) {
  checkNameArray.forEach((name, index) => {
    if (checkNameArray.lastIndexOf(name) !== index) {
      overlabNameIndex.push(index);
    }
  });
  if (
    checkNameArray.indexOf(checkNameArray[checkNameArray.length - 1]) !==
    checkNameArray.length - 1
  ) {
    overlabNameIndex.push(checkNameArray.length - 1);
  }
}

function resultShow(overlabNameIndex) {
  let answers = [];
  let i = 0;
  for (; i < overlabNameIndex.length; i++) {
    answers.push(forms[overlabNameIndex[i]][0]);
  }
  return answers;
}

function problem6(forms) {
  let overlabNameIndex = [];
  let checkNameArray = [];
  let crewNameArray = crewNameArr(forms);

  let sortCrewNameArray = sortCrewNameArr(crewNameArray);

  let joinCrewNameArray = joinCrewNameArr(sortCrewNameArray);
  checkOverlapCheck(joinCrewNameArray, checkNameArray);
  calculation(checkNameArray, overlabNameIndex);
  console.log(overlabNameIndex);
  const answer = resultShow(overlabNameIndex);
  return answer;
}
problem6(forms);
//오류있음
