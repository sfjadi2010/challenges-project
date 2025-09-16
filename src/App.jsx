import "./App.css";
import Greeting from "@components/basic/Greeting";
import ClickCounter from "@components/basic/ClickCounter";

function App() {
  return (
    <>
      <Greeting name="Alice" message="Hello, Alice!" />
      <ClickCounter />
    </>
  );
}

export default App;
