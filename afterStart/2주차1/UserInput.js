export default function UserInput({ onSubmit }) {
  const form = document.getElementById("form");
  this.render = () => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = event.target[0].value;
      onSubmit(value);
      event.target[0].value = "";
    });
  };
  this.render();
}
