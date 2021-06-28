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
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Page = styled(({ className, ...props }) => {
  return (
    <Router>
      <Box className={className} {...props}>
        <Box className="header">
          <Typography variant="h1">Anthony Tešija</Typography>
          <Typography variant="h5" gutterBottom>
            Developer · Designer · Chef · Mixed Media Artist
          </Typography>
          <SocialLinks className="social" />
        </Box>
        <Box className="needsname">
          <Box className="nav">
            <Link to="/">
              <Typography variant="body1" gutterBottom>
                About & Current Work
              </Typography>
            </Link>
            <Link to="/games">
              <Typography variant="body1" gutterBottom>
                Games
              </Typography>
            </Link>
            <Link to="/libraries">
              <Typography variant="body1" gutterBottom>
                Developer Libraries
              </Typography>
            </Link>
            <Link to="/food">
              <Typography variant="body1" gutterBottom>
                Food
              </Typography>
            </Link>
            <Link to="/art">
              <Typography variant="body1" gutterBottom>
                Art
              </Typography>
            </Link>
          </Box>

          <Box className="content">
            <Switch>
              <Route path="/games">
                {games.map((game) => (
                  <Display>
                    <Game game={game} />
                  </Display>
                ))}
              </Route>
              <Route path="/libraries">
                {libraries.map((library) => (
                  <Display>
                    <Library library={library} />
                  </Display>
                ))}
              </Route>
              <Route path="/food"></Route>
              <Route path="/art">
                {clothes.map((clothing) => (
                  <Display>
                    <Clothes clothing={clothing} />
                  </Display>
                ))}
              </Route>
              <Route path="/"></Route>
            </Switch>
          </Box>
        </Box>
      </Box>
    </Router>
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
    margin-left: 32px;
  }

  .content {
    width: 80%;
  }

  .social {
    margin-left: 16px;
  }
`;
