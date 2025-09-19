import "./App.css";
import Greeting from "@components/basic/Greeting";
import ClickCounter from "@components/basic/ClickCounter";
import ToggleDetails from "@components/basic/ToggleDetails";
import ToDoList from "@components/basic/ToDoList";
import ControlledTextInput from "@components/basic/ControlledTextInput";

function App() {
  return (
    <>
      <Greeting name="Alice!" message="Hello, " />
      <ClickCounter />
      <ToggleDetails />
      <ToDoList />
      <ControlledTextInput />
    </>
  );
}

export default App;
