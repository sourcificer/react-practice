import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div id="second-heading greets">
      <h2>Welcome!</h2>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("index-main"));
