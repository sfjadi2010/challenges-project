import React from 'react'

const CollapsiblePanel = ({question, answer, isOpen, toggleDetails}) => {
  return (
    <div className="container flex items- justify-items-center p-5 m-5 border border-gray-300 rounded-lg shadow-md">
      <h2 className="pb-5 text-2xl font-bold">{question}</h2>      
      {isOpen && <p className="text-gray-700">{answer}</p>}
      <button onClick={toggleDetails} className="mb-5">
        {isOpen ? "" : "Show Details"}
      </button>
    </div>
  )
}

export default CollapsiblePanel