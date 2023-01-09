import { useState } from "react";

const Accordion = ({ title, children, isFaq }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : ""} ${
          isFaq ? "flex-it" : ""
        }`}
        onClick={() => setOpen(!isOpen)}
      >
        <p>{title}</p>
        {isFaq ? (
          <span>{isOpen ? "-" : "+"}</span>
        ) : isOpen ? (
          <p className="plus">-</p>
        ) : (
          <p className="plus">+</p>
        )}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
