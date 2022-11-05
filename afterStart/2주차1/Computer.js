const MissionUtils = require("@woowacourse/mission-utils");
function Computer() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (computer.includes(String(number)) === false) {
      computer.push(String(number));
    }
  }
  return computer;
}
module.exports = Computer;
