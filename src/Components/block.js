import React from "react";

const Block = ({ value, index, setBox, animate, disabled = false }) => {
  const handleClick = () => {
    if (!disabled && !value) {
      setBox(index);
    }
  };

  const handleKeyDown = (event) => {
    if ((event.key === 'Enter' || event.key === ' ') && !disabled && !value) {
      event.preventDefault();
      setBox(index);
    }
  };

  return (
    <button
      className={`
        border-2 border-white rounded-md
        ${value === "x" ? "text-tgray" : "text-black"} 
        text-6xl sm:text-7xl font-bold 
        bg-ngreen hover:bg-hgree 
        ${animate ? "animate-hflip text-transparent" : ""} 
        ${disabled || value ? "cursor-not-allowed opacity-75" : "cursor-pointer hover:scale-105"} 
        transition-all duration-200 
        focus:outline-none focus:ring-2 focus:ring-tgray focus:ring-opacity-50
        shadow-md
      `}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled || !!value}
      aria-label={`Cell ${index + 1}, ${value ? `filled with ${value.toUpperCase()}` : 'empty'}`}
      tabIndex={disabled ? -1 : 0}
    >
      <span 
        className={`${animate ? "animate-texthid" : ""} select-none`}
        aria-hidden="true"
      >
        {value ? value.toUpperCase() : ''}
      </span>
    </button>
  );
};

export default React.memo(Block);
