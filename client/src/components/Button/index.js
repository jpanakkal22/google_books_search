import React from "react";
import "./style.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-md", `btn-${type}`, className].join(" ")} id="btnSearch">
      {children}
    </button>
  );
}

export default Button;
