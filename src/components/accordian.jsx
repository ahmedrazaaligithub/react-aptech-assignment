import React, { useState } from "react";

export const Accordian = ({ id, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      id={`accordion-${id}`}
      className="border border-gray-200 rounded-lg shadow-sm mb-4 overflow-hidden transition-all duration-300"
    >
      <h2 id={`accordion-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200 ${
            isOpen ? "bg-gray-50" : "bg-white"
          }`}
          aria-expanded={isOpen}
          aria-controls={`accordion-body-${id}`}
          onClick={toggleAccordion}
        >
          <span className="text-lg font-semibold">{title}</span>
          <svg
            className={`w-5 h-5 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-body-${id}`}
        className={`${
          isOpen ? "block" : "hidden"
        } p-5 bg-gray-50 border-t border-gray-200`}
        aria-labelledby={`accordion-heading-${id}`}
      >
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};