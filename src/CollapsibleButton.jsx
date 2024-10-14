import { useState, useRef } from "react";

function CollapsibleButton({ buttonLabel, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button onClick={toggleCollapse} className="collapsible">
        {buttonLabel}
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen
            ? `${contentRef.current.scrollHeight + 40}px`
            : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default CollapsibleButton;
