import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Delete(props) {
  return (
    <span className="delete" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
