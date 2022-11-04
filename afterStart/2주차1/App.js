import UserInput from "./UserInput.js";
import MakeComputerNum from "./MakeComputerNum.js";
import Check from "./Check.js";

export default function App() {
  this.data = "123";

  const userinput = new UserInput({
    onSubmit: (value) => {
      console.log(value);
    },
  });
  const computerNum = MakeComputerNum();
  console.log(computerNum);
}
