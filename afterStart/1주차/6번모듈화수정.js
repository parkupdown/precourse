const forms = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]; //

function crewNameArray(forms) {
  let crewNameArr = [];
  forms.forEach((item) => {
    crewNameArr.push(item[1]);
  });
  return crewNameArr; // 두개로 나왓어 이걸 그냥 짜르면돼
} //이렇게하면 진짜 그 값을 저장함

function cutTwoCharArray(forms) {
  const crewNameArr = crewNameArray(forms);
  let twoCharNameArr = [];
  crewNameArr.forEach((item) => {
    let i = 0;
    for (; i < item.length - 1; i++) {
      twoCharNameArr.push(item.slice(i, i + 2));
    }
  }); //두글자로 이루어진 완성
  return twoCharNameArr;
}

function pushOverlapArray(forms) {
  //이게 독립적이게 사용해야함
  const twoCharNameArr = cutTwoCharArray(forms);
  let overlapArray = [];
  let toCheckArray = [];
  twoCharNameArr.forEach((twoCharName) => {
    if (toCheckArray.includes(twoCharName) === true) {
      overlapArray.push(twoCharName);
    }
    if (toCheckArray.includes(twoCharName) === false) {
      toCheckArray.push(twoCharName);
    }
  });
  return overlapArray;
}

function problem6(forms) {
  let answer = [];
  const overlapArray = pushOverlapArray(forms);
  forms.forEach((nameAndEmail) => {
    let i = 0;
    for (; i < nameAndEmail.length; i++) {
      if (overlapArray.includes(nameAndEmail[1].slice(i, i + 2))) {
        answer.push(nameAndEmail[0]);
      }
    }
  });
  return answer.sort();
}
problem6(forms);
