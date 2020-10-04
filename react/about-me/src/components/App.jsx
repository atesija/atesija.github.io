import React from "react";
import { Game } from "./Game";
import { SocialLinks } from "./SocialLinks";

function App() {
  return (
    <>
      <h1>Anthony Tesija</h1>
      <Game
        title="GourMelee"
        description="not a long description"
        images={["images/gourmelee/knives.gif", "images/gourmelee/mochi.gif"]}
      />
      <SocialLinks />
    </>
  );
}

export default App;
