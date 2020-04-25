import React from "react";
import "./App.css";
import ImageButton from "./ImageButton";
import Email from "../images/social/email.png";
import Github from "../images/social/github.png";
import Instagram from "../images/social/instagram.png";
import Twitter from "../images/social/twitter.png";

function App() {
  return (
    <>
      <h1>Anthony Tesija</h1>
      <div className="social">
        <ImageButton
          link="https://www.instagram.com/antontesh/"
          image={Instagram}
          altText="Link to my Instagram"
        />
        <ImageButton
          link="https://twitter.com/AntonTesh"
          image={Twitter}
          altText="Link to my Twitter"
        />
        <ImageButton
          link="https://github.com/atesija"
          image={Github}
          altText="Link to my Github"
        />
        <ImageButton
          link="mailto:antesija@gmail.com"
          image={Email}
          altText="Email me"
        />
      </div>
    </>
  );
}

export default App;
