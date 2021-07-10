import React from "react";
import styled from "styled-components";

export const SocialLink = styled(
  ({ className, link, image, altText, ...props }) => {
    return (
      <a className={className} {...props} href={link}>
        <img className="social-image" src={image} alt={altText} />
      </a>
    );
  }
)`
  .social-image {
    width: 32px;
    height: 32px;
  }
`;
