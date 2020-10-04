import React from "react";
import styled from "styled-components";
import Box from "ui-box";

export const Game = styled(
  ({ className, title, description, images = [], ...props }) => {
    return (
      <Box className={className} {...props}>
        <h2>{title}</h2>
        <p>{description}</p>
        {images.map((image) => {
          return <img className="game-image" src={image} />;
        })}
      </Box>
    );
  }
)`
  padding: 8px;
  border-radius: 4px;
  background: white;
  filter: drop-shadow(4px 4px 4px #444444);
  width: 25%;

  .game-image {
    max-width: 40%;
    max-height: 20%;
  }
`;

// Game template
// <div class="game" id="GAMENAME">
//     <div class="gameScreenshots">
//         <img src="games/GAMENAME/images/1.png" class="mainScreenshot"/>
//         <img src="games/GAMENAME/images/2.png" class="screenshot"/>
//         <img src="games/GAMENAME/images/3.png" class="screenshot"/>
//     </div>
//     <div class="gameInfo">
//         <img src="games/GAMENAME/icon/icon.png" class="icon"/>
//         <p class="gameTitle">
//             GAMENAME
//         </p>
//         <p class="gameYear">
//             20XX - Platform and Other Platform
//         </p>
//         <p class="gameText">
//             Features
//         </p>
//         <p class="gameText">
//             Long description
//         </p>
//         <ul class="learned"> Learned:
//             <li class="learned">A thing</li>
//             <li class="learned">Another thing</li>
//         </ul>
//         <ul class="learned"> Press:
//             <li class="learned"><a href="LINK">Name - Article</a></li>
//             <li class="learned"><a href="LINK">Name - Video</a></li>
//         </ul>
//         <a href="https://play.google.com/store">
//             <img src="images/stores/download.png" width="172px" height="60px" class="store">
//         </a>
//     </div>
// </div>
