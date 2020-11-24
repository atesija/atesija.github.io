import React from "react";
import styled from "styled-components";
import Box from "ui-box";

export const Game = styled(({ className, game, ...props }) => {
  return (
    <Box className={className} {...props}>
      <h2>{game.title}</h2>
      <p>{game.year}</p>
      <p>{game.platforms}</p>
      <p>{game.description}</p>
    </Box>
  );
})``;
