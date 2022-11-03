import React from "react";
import { Link } from "react-router-dom";

const Colors = ({ colors }) => {
  return (
    <div>
      <header>
        <h1>Welcome to the color factory</h1>
        <h1>
          <Link to="/colors/new">Add a color</Link>
        </h1>
      </header>
      <h2>Please select a color</h2>
      {Object.keys(colors).map((color) => (
        <h2 key={color}>
          <Link to={`/colors/${color}`}>{color}</Link>
        </h2>
      ))}
    </div>
  );
};

export default Colors;
