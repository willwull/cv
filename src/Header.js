import React from "react";
import TextWithIcon from "./TextWithIcon";

function Header({ aboutData }) {
  const { name, phone, email, github } = aboutData;
  return (
    <div className="header-container">
      <h1>{name}</h1>
      <div className="header-info">
        <TextWithIcon icon="phone">{phone}</TextWithIcon>
        <TextWithIcon icon="envelope">
          <a href={`mailto:${email}`}>{email}</a>
        </TextWithIcon>
        <TextWithIcon icon="link">
          <a href={`https://github.com/${github}`}>{`github.com/${github}`}</a>
        </TextWithIcon>
      </div>
    </div>
  );
}

export default Header;
