import React, { useState} from "react";

const ControlledTextInput = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  return (
    <div className="container flex flex-col items-center justify-center p-5 m-5 border border-gray-300 rounded-lg shadow-md">
      <h2 className="pb-5 text-2xl font-bold">Controlled Text Input</h2>
      <input type="text" value={text} onChange={(e) => handleTextChange(e)} className="border p-2 rounded" />
      <p>You typed: {text}</p>
    </div>
  );
};

export default ControlledTextInput;
