import { useState } from "react";
import "../Css/Accordian.css";
import { FaChevronDown } from "react-icons/fa6";

export const Accordion = ({ smallaccordian }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
    {smallaccordian.map((item, index) => (
      <div key={index} className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(index)}
        >
          <span>{item.title}</span>
          <FaChevronDown
            className={`chevron ${openIndex === index ? "rotate" : ""}`}
            size={15} color={"black"}
          />
        </div>
        <div
          className={`accordion-content ${openIndex === index ? "open" : ""}`}
        >
          {item.content}
        </div>
      </div>
    ))}
  </div>
  );
};


