import React from "react";
import styled from "styled-components";
import Box from "ui-box";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";
import ReactPlayer from "react-player";

import Android from "../images/gamestores/android.png";
import Download from "../images/gamestores/download.png";
import Gamejolt from "../images/gamestores/gamejolt.png";
import IOs from "../images/gamestores/ios.png";
import Itchio from "../images/gamestores/itchio.png";
import Steam from "../images/gamestores/steam.png";
import Unity from "../images/gamestores/unity.png";

const StoreMap = {
  android: Android,
  download: Download,
  gamejolt: Gamejolt,
  ios: IOs,
  itchio: Itchio,
  steam: Steam,
  unity: Unity,
};

export const Game = styled(({ className, game, ...props }) => {
  return (
    <Box className={className} {...props}>
      <Typography variant="h6" gutterBottom>
        {game.title}
      </Typography>
      <Typography variant="caption" gutterBottom>
        {game.year} - {game.platforms}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {game.description}
      </Typography>
      {game.screenshots &&
        game.screenshots.map((image) => (
          <img
            className="screenshotImage"
            src={process.env.PUBLIC_URL + "/images/games/" + image}
          />
        ))}
      {game.videos &&
        game.videos.map((video) => (
          <>
            <ReactPlayer
              className="gameVideo"
              url={video.link}
              controls={true}
              width="180px"
              height="100px"
            />
            <Typography variant="caption" gutterBottom>
              {video.caption}
            </Typography>
          </>
        ))}
      {game.links &&
        game.links.map((link) => (
          <Typography variant="body1" gutterBottom>
            <Link href={link.link}>{link.name}</Link>
          </Typography>
        ))}
      {game.storeLinks &&
        game.storeLinks.map((storeLink) => (
          <Link href={storeLink.link}>
            <img className="gameStoreLink" src={StoreMap[storeLink.store]} />
          </Link>
        ))}
    </Box>
  );
})`
  .screenshotImage {
    width: 200px;
  }

  .gameStoreLink {
    width: 100px;
  }
`;
