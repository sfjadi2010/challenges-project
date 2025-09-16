import React from "react";
import Collapsed from "@assets/collapsed.png";
import Expanded from "@assets/expanded.png";

const CollapsiblePanel = ({ question, answer, isOpen, toggleDetails }) => {
  return (
    <div className="container flex flex-col justify-start w-300 p-5 m-5 border border-gray-300 rounded-lg shadow-md">
      <div className="flex align-items-center justify-between">
        <h2 className="pb-5 text-2xl font-bold">{question}</h2>

        <button onClick={toggleDetails} className="border-0 rounded-3xl">
          {isOpen ? (
            <img
              src={Expanded}
              alt="Collapse"
              className="w-10 h-10 border-0 rounded-3xl"
            />
          ) : (
            <img
              src={Collapsed}
              alt="Expand"
              className="w-10 h-10 border-0 rounded-3xl"
            />
          )}
        </button>
      </div>

      {isOpen && <p className="text-gray-700 text-left">{answer}</p>}
    </div>
  );
};

export default CollapsiblePanel;
