import React from "react";
import styled from "styled-components";
import Box from "ui-box";
import { Typography } from "@material-ui/core";
import { Display } from "./Display";

export const About = styled(({ className, clothing, ...props }) => {
  return (
    <Box className={className} {...props}>
      <Display>
        <Typography variant="body1">
          Anthony Tešija (he/him) is cool and I can say that because I'm writing
          this
        </Typography>
      </Display>
    </Box>
  );
})``;
