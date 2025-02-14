import { useState } from "react";
import { Accordian } from "../components/accordian";

const Props = () => {
  const accordionData = [
    {
      id: 1,
      title: "What is Flowbite?",
      content:
        "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      id: 2,
      title: "Is there a Figma file available?",
      content:
        "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
    },
    {
      id: 3,
      title: "What are the differences between Flowbite and Tailwind UI?",
      content:
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">props</h1>
      {accordionData.map((item) => (
        <Accordian key={item.id} id={item.id} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Props;