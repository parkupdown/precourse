function shot(user, computer) {
  let ballCount = 0;
  let strikeCount = 0;

  for (let i = 0; i < 3; i++) {
    if (user[i] === computer[i]) {
      strikeCount = strikeCount + 1;
    }
    if (user[i] !== computer[i] && computer.includes(user[i])) {
      ballCount = ballCount + 1;
    }
  }
  return [ballCount, strikeCount];
}

class Game {
  constructor({ user, computer }) {
    this.user = user;
    this.computer = computer;
  }

  judgement() {
    const [ballCount, strikeCount] = shot(this.user, this.computer);
    return [ballCount, strikeCount];
  }
}
module.exports = Game;
