import React from "react";
import { Display } from "./Display";
import { Game } from "./Game";
import { games } from "../resources/games";
import { Clothes } from "./Clothes";
import { clothes } from "../resources/clothes";
import { SocialLinks } from "./SocialLinks";
import styled from "styled-components";
import Box from "ui-box";

export const Page = styled(({ className, ...props }) => {
  return (
    <Box className={className} {...props}>
      <h1>Anthony Tesija</h1>
      <h3>Developer - Designer - Chef - Mixed Media Artist</h3>
      <checkbox>Games</checkbox>
      <checkbox>Art</checkbox>
      <checkbox>Food</checkbox>
      <checkbox>Clothes</checkbox>
      <checkbox>Design</checkbox>
      <Box className="everything">
        {games.map((game) => (
          <Display>
            <Game game={game} />
          </Display>
        ))}
        {clothes.map((clothing) => (
          <Display>
            <Clothes clothing={clothing} />
          </Display>
        ))}
      </Box>
      <SocialLinks />
    </Box>
  );
})`
  .everything {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
