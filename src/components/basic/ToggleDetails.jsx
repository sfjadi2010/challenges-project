import React, { useState } from "react";

const ToggleDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container flex flex-col items-center justify-center p-5 m-5 border border-gray-300 rounded-lg shadow-md">
      <h2 className="pb-5 text-2xl font-bold">Collapsible Panel FAQ</h2>
    </div>
  );
};

export default ToggleDetails;
