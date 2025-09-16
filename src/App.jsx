import "./App.css";
import Greeting from "@components/basic/Greeting";
import ClickCounter from "@components/basic/ClickCounter";
import ToggleDetails from "@components/basic/ToggleDetails";

function App() {
  return (
    <>
      <Greeting name="Alice!" message="Hello, " />
      <ClickCounter />
      <ToggleDetails />
    </>
  );
}

export default App;
