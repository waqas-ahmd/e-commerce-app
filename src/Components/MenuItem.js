import React from "react";

const MenuItem = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="menuItem">
      {children}
    </div>
  );
};

export default MenuItem;
