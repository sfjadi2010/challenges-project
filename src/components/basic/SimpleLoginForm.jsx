import React, { useState } from "react";

const SimpleLoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container flex flex-col items-center justify-center p-5 m-5 border border-gray-300 rounded-lg shadow-md">
        <h2 className="pb-5 text-2xl font-bold">Simple Login</h2>

        
      </div>
    </>
  );
};

export default SimpleLoginForm;
