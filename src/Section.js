import React from "react";
import TextWithIcon from "./TextWithIcon";

function Section({ title, icon, children }) {
  return (
    <section>
      <h2>
        <TextWithIcon icon={icon}>{title}</TextWithIcon>
      </h2>
      {children}
    </section>
  );
}

export default Section;
