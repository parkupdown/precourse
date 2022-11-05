const MissionUtils = require("@woowacourse/mission-utils");
const CheckUserInput = require("./CheckUserInput");
const Game = require("./Game");
const Computer = require("./Computer");
const Render = require("./Render");
class App {
  constructor() {
    // 이걸 함수 수정하자
    this.firstTry = true;
    this.computer = Computer();
  }

  play() {
    const render = new Render({
      endPointNum: this.endPointNum,
      computer: this.computer,
      play: this.play,
    });

    if (this.firstTry === true) {
      render.startment();
    }

    render.getUser().then((num) => {
      this.firstTry = false;
      this.userNum = [...String(num)];

      const checkuserinput = new CheckUserInput({
        userNum: this.userNum,
      });

      try {
        checkuserinput.checkValidation();
      } catch (error) {
        throw new Error(error);
      }

      const game = new Game({ user: this.userNum, computer: this.computer });
      console.log(this.computer);

      const [ballCount, strikeCount] = game.judgement();
      this.ball = ballCount;
      this.strikeCount = strikeCount;

      render.result({ ballCount: this.ball, strikeCount: this.strikeCount });

      if (this.strikeCount !== 3) {
        this.play();
      }
      if (this.strikeCount === 3) {
        render.replay().then((number) => {
          this.endPointNum = number;
          if (this.endPointNum === "1") {
            this.firstTry = true;
            this.computer = Computer();
            this.play();
          }
          if (this.endPointNum === "2") {
            MissionUtils.Console.print("수고하셨습니다.");
          }
        });
      }
    });
  }
}

module.exports = App;
