import React from "react";
import styled from "styled-components";
import Box from "ui-box";
import Paper from "@material-ui/core/Paper";

export const Display = styled(({ className, children, ...props }) => {
  return (
    <Paper elevation={5} className={className} {...props}>
      {children}
    </Paper>
  );
})`
  padding: 16px;
  margin: 8px;
  max-width: 250px;
  min-width: 200px;
`;
