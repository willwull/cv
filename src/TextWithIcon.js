import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TextWithIcon({ icon, children }) {
  return (
    <span>
      <FontAwesomeIcon icon={["fad", icon]} className="icon" /> {children}
    </span>
  );
}

export default TextWithIcon;
