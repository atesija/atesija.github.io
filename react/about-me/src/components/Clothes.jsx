import React from "react";
import styled from "styled-components";
import Box from "ui-box";

export const Clothes = styled(({ className, clothing, ...props }) => {
  return (
    <Box className={className} {...props}>
      <h2>{clothing.title}</h2>
      <p>{clothing.year}</p>
      <p>{clothing.description}</p>
      {clothing.images.map((image) => (
        <img
          className="clothingImage"
          src={process.env.PUBLIC_URL + "/images" + image}
        />
      ))}
    </Box>
  );
})`
  .clothingImage {
    width: 20%;
  }
`;
