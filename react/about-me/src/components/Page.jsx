import React from "react";
import { Display } from "./Display";
import { Game } from "./Game";
import { games } from "../resources/games";
import { Clothes } from "./Clothes";
import { clothes } from "../resources/clothes";
import { SocialLinks } from "./SocialLinks";
import styled from "styled-components";
import Box from "ui-box";
import Chip from "@material-ui/core/Chip";
import { Typography } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

export const Page = styled(({ className, ...props }) => {
  const [state, setState] = React.useState({
    games: true,
    art: true,
    food: true,
    clothes: true,
    design: true,
  });

  const handleClick = (event) => {
    setState({ ...state, [event]: !state[event] });
  };

  //Custom colors for the filters and each item

  return (
    <Box className={className} {...props}>
      <Box className="header">
        <Typography variant="h1">Anthony Tešija</Typography>
        <Typography variant="h5" gutterBottom>
          Developer - Designer - Chef - Mixed Media Artist
        </Typography>
      </Box>

      <Box className="filters">
        <Chip
          className="filter"
          label="Games"
          onClick={() => handleClick("games")}
          clickable
          color="primary"
          variant={state.games ? "default" : "outlined"}
        />
        <Chip
          className="filter"
          label="Art"
          onClick={() => handleClick("art")}
          clickable
          color="primary"
          variant={state.art ? "default" : "outlined"}
        />
        <Chip
          className="filter"
          label="Food"
          onClick={() => handleClick("food")}
          clickable
          color="primary"
          variant={state.food ? "default" : "outlined"}
        />
        <Chip
          className="filter"
          label="Clothes"
          onClick={() => handleClick("clothes")}
          clickable
          color="primary"
          variant={state.clothes ? "default" : "outlined"}
        />
        <Chip
          className="filter"
          label="Design"
          onClick={() => handleClick("design")}
          clickable
          color="primary"
          variant={state.design ? "default" : "outlined"}
        />
      </Box>
      <Box className="everything">
        {state.games &&
          games.map((game) => (
            <Display>
              <Game game={game} />
            </Display>
          ))}
        {state.clothes &&
          clothes.map((clothing) => (
            <Display>
              <Clothes clothing={clothing} />
            </Display>
          ))}
      </Box>
      <SocialLinks />
    </Box>
  );
})`
  .header {
    margin: auto;
    text-align: center;
  }

  .filter {
    margin: 8px;
  }

  .filters {
    margin: auto;
    display: flex;
    justify-content: center;
    width: 25%;
  }

  .everything {
    display: flex;
    flex-wrap: wrap;
  }
`;
