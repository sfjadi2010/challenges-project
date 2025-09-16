import React, { useState } from "react";
import CollapsiblePanel from "./CollapsiblePanel";

const ToggleDetails = () => {
  const [openId, setOpenId] = useState(null);

  const toggleDetails = (id) => {
    setOpenId(openId === id ? null : id);    
  };

  const faq = [
    {
      id: 1,
      question: "What is your return policy?",
      answer: "You can return any item within 30 days for a full refund.",
    },
    {
      id: 2,
      question: "How do I track my order?",
      answer: "You can track your order status in your account dashboard.",
    },
    {
      id: 3,
      question: "Do you offer customer support?",
      answer: "Yes, our customer support is available 24/7 via chat and email.",
    },
    {
      id: 4,
      question: "Where are you located?",
      answer: "We are located in San Francisco, CA.",
    },
  ];

  return (
    <div className="container flex flex-col items-center justify-center p-5 m-5 border border-gray-300 rounded-lg shadow-md">
      <h2 className="pb-5 text-2xl font-bold">Collapsible Panel FAQ</h2>

      {faq &&
        faq.map((item) => (
          <CollapsiblePanel
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openId === item.id}
            toggleDetails={toggleDetails}
          />
        ))}
    </div>
  );
};

export default ToggleDetails;
