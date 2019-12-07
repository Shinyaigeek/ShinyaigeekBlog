import React from "react";

import Animation from "./Animation";
import ScrollDown from "./ScrollDown";

import "../style/welcome.scss";

export default function Welcome() {
  return (
    <div className="welcome">
      <img className="banana" src="/static/banana.png" />
      <ScrollDown />
      <Animation />
    </div>
  );
}
