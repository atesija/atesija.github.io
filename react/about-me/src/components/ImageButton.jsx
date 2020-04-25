import React from "react";
import "./ImageButton.css";

export default ({ link, image, altText }) => {
  return (
    <a href={link}>
      <img className="image" src={image} alt={altText} />
    </a>
  );
};
