import React from "react";
import styled from "styled-components";
import Box from "ui-box";
import { Typography } from "@material-ui/core";

export const Game = styled(({ className, game, ...props }) => {
  return (
    <Box className={className} {...props}>
      <Typography variant="h6" gutterBottom>
        {game.title}
      </Typography>
      <Typography variant="caption" gutterBottom>
        {game.year} - {game.platforms}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {game.description}
      </Typography>
      {game.screenshots.map((image) => (
        <img
          className="screenshotImage"
          src={process.env.PUBLIC_URL + "/images" + image}
        />
      ))}
    </Box>
  );
})`
  .screenshotImage {
    width: 200px;
  }
`;
