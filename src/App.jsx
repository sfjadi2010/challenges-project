import "./App.css";
import Greeting from "@components/basic/Greeting";
import ClickCounter from "@components/basic/ClickCounter";
import ToggleDetails from "@components/basic/ToggleDetails";
import ToDoList from "@components/basic/ToDoList";

function App() {
  return (
    <>
      <Greeting name="Alice!" message="Hello, " />
      <ClickCounter />
      <ToggleDetails />
      <ToDoList />
    </>
  );
}

export default App;
