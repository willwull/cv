import React from "react";

function SkillEntry({ entry }) {
  const { title, description } = entry;
  return (
    <div className="entry">
      <div>
        <b>{title}</b>
      </div>
      <div>
        {description
          .split("\n\n")
          .map(str => str.trim())
          .map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
      </div>
    </div>
  );
}

export default SkillEntry;
