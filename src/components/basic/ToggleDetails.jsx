import React, { useState } from "react";
import CollapsiblePanel from "./CollapsiblePanel";

const ToggleDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    console.log("Toggling details");
    setIsOpen(!isOpen);
  };

  const faq = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days for a full refund.",
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order status in your account dashboard.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, our customer support is available 24/7 via chat and email.",
    },
    {
      question: "Where are you located?",
      answer: "We are located in San Francisco, CA.",
    },
  ];

  return (
    <div className="container flex flex-col items-center justify-center p-5 m-5 border border-gray-300 rounded-lg shadow-md">
      <h2 className="pb-5 text-2xl font-bold">Collapsible Panel FAQ</h2>
      
      {faq && faq.map((item, index) => (
        <CollapsiblePanel
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={isOpen}
          toggleDetails={toggleDetails}
        />
      ))}
    </div>
  );
};

export default ToggleDetails;
