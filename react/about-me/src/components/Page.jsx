import React from "react";
import { Display } from "./Display";
import { Game } from "./Game";
import { games } from "../resources/games";
import { Library } from "./Library";
import { libraries } from "../resources/libraries";
import { Clothes } from "./Clothes";
import { clothes } from "../resources/clothes";
import { SocialLinks } from "./SocialLinks";
import { About } from "./About";
import styled from "styled-components";
import Box from "ui-box";
import { Typography } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Face from "../images/face.gif";

export const Page = styled(({ className, ...props }) => {
  return (
    <Router>
      <Box className={className} {...props}>
        <Box className="header">
          <Box className="nameface">
            <img className="face" src={Face} alt={"A glitched face"} />
            <Box>
              <Typography variant="h1">Anthony Tešija</Typography>
              <Typography variant="h5" gutterBottom>
                Developer · Designer · Chef · Mixed Media Artist
              </Typography>
              <SocialLinks className="social" />
            </Box>
          </Box>
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
            <Link to="/games/localmultiplayer">
              <Typography className="subnavitem" variant="body1" gutterBottom>
                Local Multiplayer
              </Typography>
            </Link>
            <Link to="/games/mentalhealth">
              <Typography className="subnavitem" variant="body1" gutterBottom>
                Mental Health
              </Typography>
            </Link>
            <Link to="/games/art">
              <Typography className="subnavitem" variant="body1" gutterBottom>
                Art / Interaction
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
            <Link to="/influence">
              <Typography variant="body1" gutterBottom>
                Influence
              </Typography>
            </Link>
          </Box>

          <Box className="content">
            <Switch>
              <Route path="/games/localmultiplayer">
                {games
                  .filter((game) => game?.tags?.includes("multiplayer"))
                  .map((game) => (
                    <Display>
                      <Game game={game} />
                    </Display>
                  ))}
              </Route>
              <Route path="/games/mentalhealth">
                {games
                  .filter((game) => game?.tags?.includes("mentalhealth"))
                  .map((game) => (
                    <Display>
                      <Game game={game} />
                    </Display>
                  ))}
              </Route>
              <Route path="/games/art">
                {games
                  .filter((game) => game?.tags?.includes("art"))
                  .map((game) => (
                    <Display>
                      <Game game={game} />
                    </Display>
                  ))}
              </Route>
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
              <Route path="/">
                <About />
              </Route>
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

  .face {
    object-fit: contain;
  }

  .nameface {
    display: flex;
    margin-bottom: 32px;
  }

  .needsname {
    display: flex;
    width: 100%;
  }

  .nav {
    margin-left: 32px;
    margin-right: 32px;
  }

  .subnavitem {
    margin-left: 16px;
  }

  .content {
    width: 80%;
  }

  .social {
    margin-bottom: 16px;
  }
`;
