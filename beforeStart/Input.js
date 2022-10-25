export default class Input {
  constructor({ $target, data }) {
    const FORM = document.createElement("form");
    $target.appendChild(FORM);
    this.render = () => {
      FORM.innerHTML = `<input placeholder="인풋"/>`;
    };
    this.render();
    FORM.addEventListener("submit", (event) => {
      event.preventDefault();
      this.data = event.target[0].value;
    });
  }
}
