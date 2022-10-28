const forms = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]; //

function crewNameArray(forms, crewNameArr) {
  forms.forEach((item) => {
    crewNameArr.push(item[1]);
  });
}

function cutTwoCharArray(crewNameArr, twoCharNameArr) {
  crewNameArr.forEach((item) => {
    let i = 0;
    for (; i < item.length - 1; i++) {
      twoCharNameArr.push(item.slice(i, i + 2));
    }
  }); //두글자로 이루어진 전체 array 완성
}
function pushOverlapArray(twoCharNameArr, overlapArray) {
  let toCheckArray = [];
  twoCharNameArr.forEach((twoCharName) => {
    if (toCheckArray.includes(twoCharName) === true) {
      overlapArray.push(twoCharName);
    }
    if (toCheckArray.includes(twoCharName) === false) {
      toCheckArray.push(twoCharName);
    }
  });
}

//판단
function checkOverlap(overlapArray, forms, answer) {
  forms.forEach((nameAndEmail) => {
    let i = 0;
    for (; i < nameAndEmail.length; i++) {
      if (overlapArray.includes(nameAndEmail[1].slice(i, i + 2))) {
        answer.push(nameAndEmail[0]);
      }
    }
  });
}

function resultShow(answer) {
  const set = new Set(answer);
  const answers = [...set].sort();

  return answers;
}

function problem6(forms) {
  let crewNameArr = [];
  let twoCharNameArr = [];
  let count = 0;
  let overlapArray = [];
  let answer = [];

  crewNameArray(forms, crewNameArr);

  cutTwoCharArray(crewNameArr, twoCharNameArr, count);

  pushOverlapArray(twoCharNameArr, overlapArray);
  checkOverlap(overlapArray, forms, answer);
  const answerEmail = resultShow(answer);
  return answerEmail;
}
problem6(forms);
