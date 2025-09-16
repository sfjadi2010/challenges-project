import React from "react";

const Greeting = ({ name, message }) => {
  return (
    <div className="container flex flex-col items-center justify-center p-5 m-5 border border-gray-300 rounded-lg shadow-md">
      <h2 className="pb-5 text-2xl font-bold">Greeting</h2>
      <div>
        {message ? message : "Welcome!"} {name ? name : "Guest"}
      </div>
    </div>
  );
};

export default Greeting;
