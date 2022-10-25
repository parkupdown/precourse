const nunu = {
  q: "consume",
  w: "snowball",
};
const garen = {
  q: "strike",
  w: "courage",
};
//이렇게 비슷한 object를 많이 만들 일이 있다면
//class를 쓰자

function machine({ skill1, skill2 }) {
  this.q = skill1;
  this.w = skill2;
}
//this.는 새로운 object

const nunu2 = new machine({ skill1: "consume", skill2: "snowball" });
const garen2 = new machine({ skill1: "strike", skill2: "courage" });
console.log(nunu2);
console.log(garen2);
console.log(nunu2.q);

class Hero {
  constructor({ skill1, skill2 }) {
    this.q = skill1;
    this.w = skill2;
  }
}

const nunu3 = new Hero({ skill1: "haha", skill2: "hoho" });

console.log(nunu3);
