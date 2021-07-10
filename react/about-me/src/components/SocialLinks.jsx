import React from "react";
import styled from "styled-components";
import Box from "ui-box";
import { SocialLink } from "./SocialLink";
import Email from "../images/social/email.png";
import Github from "../images/social/github.png";
import Instagram from "../images/social/instagram.png";
import Twitter from "../images/social/twitter.png";
import Itchio from "../images/social/itchio.png";

export const SocialLinks = styled(({ className, ...props }) => {
  return (
    <Box className={className} {...props}>
      <SocialLink
        className="sociallink"
        link="https://www.instagram.com/antontesh/"
        image={Instagram}
        altText="Link to my Instagram"
      />
      <SocialLink
        className="sociallink"
        link="https://twitter.com/AntonTesh"
        image={Twitter}
        altText="Link to my Twitter"
      />
      <SocialLink
        className="sociallink"
        link="https://antontesh.itch.io/"
        image={Itchio}
        altText="Link to my Itch.io"
      />
      <SocialLink
        className="sociallink"
        link="https://github.com/atesija"
        image={Github}
        altText="Link to my Github"
      />
      <SocialLink
        className="sociallink"
        link="mailto:antesija@gmail.com"
        image={Email}
        altText="Email me"
      />
    </Box>
  );
})`
  display: flex;

  .sociallink {
    margin-right: 8px;
  }
`;
