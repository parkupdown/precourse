export default function UserInput({ onSubmit }) {
  const form = document.getElementById("form");
  this.render = () => {
    form.addEventListener("submit", (event) => {
      onSubmit(event);
    });
  };
  this.render();
}
