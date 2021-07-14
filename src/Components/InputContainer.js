import React from "react";

const InputContainer = ({ children, style }) => {
  return (
    <div style={{ ...style }} className="p-1 my-1 input-container">
      {children}
    </div>
  );
};

export default InputContainer;
