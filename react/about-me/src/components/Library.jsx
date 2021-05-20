import React from "react";
import styled from "styled-components";
import Box from "ui-box";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";
import ReactPlayer from "react-player";

import Unity from "../images/gamestores/unity.png";

const StoreMap = {
  unity: Unity,
};

export const Library = styled(({ className, library, ...props }) => {
  return (
    <Box className={className} {...props}>
      <Typography variant="h6" gutterBottom>
        {library.title}
      </Typography>
      <Typography variant="caption" gutterBottom>
        {library.year} - {library.platforms}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {library.description}
      </Typography>
      {library.screenshots &&
        library.screenshots.map((image) => (
          <img
            className="screenshotImage"
            src={process.env.PUBLIC_URL + "/images/libraries/" + image}
          />
        ))}
      {library.videos &&
        library.videos.map((video) => (
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
      {library.links &&
        library.links.map((link) => (
          <Typography variant="body1" gutterBottom>
            <Link href={link.link}>{link.name}</Link>
          </Typography>
        ))}
      {library.storeLinks &&
        library.storeLinks.map((storeLink) => (
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
