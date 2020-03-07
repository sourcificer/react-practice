import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const greeting = () => {
  return (
    <div id="second-heading greets">
      <h2>Welcome!</h2>
      <Pet name="Luna" animal="cat" breed="dontKnow" />
    </div>
  );
};

render(React.createElement(greeting), document.getElementById("index-main"));
