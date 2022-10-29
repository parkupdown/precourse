const forms = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]; //

function crewNameArray(array) {
  let crewNameArr = [];
  array.forEach((item) => {
    crewNameArr.push(item[1]);
  });
  return crewNameArr;
}
//이중 배열에서 이름 배열을 따로 만들어주는 함수

function cutTwoCharArray(array) {
  const crewNameArr = crewNameArray(array);
  let twoCharNameArr = [];
  crewNameArr.forEach((item) => {
    let i = 0;
    for (; i < item.length - 1; i++) {
      twoCharNameArr.push(item.slice(i, i + 2));
    }
  });
  return twoCharNameArr;
}
//이름 배열을 두 글자만 잘라 새로운 배열을 리런하는 함수

function pushOverlapArray(array) {
  let overlapArray = [];
  let toCheckArray = [];
  array.forEach((twoCharName) => {
    if (toCheckArray.includes(twoCharName) === true) {
      overlapArray.push(twoCharName);
    }
    if (toCheckArray.includes(twoCharName) === false) {
      toCheckArray.push(twoCharName);
    }
  });
  return overlapArray;
}
//중복되는 Array를 찾아아 중복된 두 글자가 담긴 배열은 반환하는 함수

function problem6(forms) {
  let answer = [];

  const twoCharNameArr = cutTwoCharArray(forms);

  const overlapArray = pushOverlapArray(twoCharNameArr);

  forms.forEach((nameAndEmail) => {
    let i = 0;
    for (; i < nameAndEmail.length; i++) {
      if (overlapArray.includes(nameAndEmail[1].slice(i, i + 2))) {
        answer.push(nameAndEmail[0]); //전체 배열에서 중복된 이름이 있는 지 확인 후 있다면 그 이메일을 반환하는 함수
      }
    }
  });

  return answer.sort();
}
problem6(forms);
