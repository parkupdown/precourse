//프리코스에 들어가기 전  Class 문법을 활용하여 Todolist를 만들어본다
import Input from "./Input.js";
import Todopaint from "./Todopaint.js";

export default class App {
  constructor({ $target }) {
    const input = new Input({ $target });
    const todopaint = new Todopaint({ $target });
    console.log(this);
  }
}
