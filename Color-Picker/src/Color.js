import React from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";

const Color = ({ colors }) => {
  const { color } = useParams();
  const history = useHistory();
  const checkURL = Object.keys(colors);
  if (!checkURL.includes(color)) history.push("/colors");
  return (
    <div style={{ backgroundColor: colors[color] }}>
      <h1>The color is {color}</h1>
      <button>
        <Link to="/colors">GO Back!</Link>
      </button>
    </div>
  );
};

export default Color;
