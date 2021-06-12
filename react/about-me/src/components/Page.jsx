import React from "react";
import { Display } from "./Display";
import { Game } from "./Game";
import { games } from "../resources/games";
import { Library } from "./Library";
import { libraries } from "../resources/libraries";
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
    libraries: true,
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
          Developer · Designer · Chef · Mixed Media Artist
        </Typography>
      </Box>
      <Box className="needsname">
        <Box className="nav">
          <Typography variant="body1" gutterBottom>
            Games
          </Typography>
          <Typography variant="body1" gutterBottom>
            Libraries
          </Typography>
          <Typography variant="body1" gutterBottom>
            Food
          </Typography>
          <Typography variant="body1" gutterBottom>
            Design
          </Typography>

          <SocialLinks />
        </Box>
        <Box className="content">
          <Box className="everything">
            {state.games &&
              games.map((game) => (
                <Display>
                  <Game game={game} />
                </Display>
              ))}
            {libraries.map((library) => (
              <Display>
                <Library library={library} />
              </Display>
            ))}
            {state.clothes &&
              clothes.map((clothing) => (
                <Display>
                  <Clothes clothing={clothing} />
                </Display>
              ))}
          </Box>
        </Box>
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
          //style={{ backgroundColor: "red" }}
        />
      </Box>
    </Box>
  );
})`
  .header {
    margin-left: 16px;
    text-align: left;
  }

  .needsname {
    display: flex;
    width: 100%;
  }

  .nav {
    width: 20%;
  }

  .content {
    width: 80%;
  }

  .filter {
    margin: 8px;
    background-color: "pink";
  }

  .filters {
    margin: auto;
    display: flex;
    justify-content: center;
    width: 25%;
  }

  // .everything {
  //   display: flex;
  //   flex-wrap: wrap;
  // }
`;
