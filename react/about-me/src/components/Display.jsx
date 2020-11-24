import React from "react";
import styled from "styled-components";
import Box from "ui-box";

export const Display = styled(({ className, children, ...props }) => {
  return (
    <Box className={className} {...props}>
      {children}
    </Box>
  );
})`
  padding: 16px;
  border-radius: 4px;
  background: white;
  filter: drop-shadow(4px 4px 4px #444444);
  margin: 8px;
  max-width: 25%;
  min-width: 20%;
`;
