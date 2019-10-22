import React from "react";

function Entry({ entry }) {
  const { title, company, date, description, location } = entry;
  return (
    <div className="entry">
      <div>
        <b>{title}</b>
        <br />
        {company} - {location}
        <br />
        {date}
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

export default Entry;
