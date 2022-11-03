import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ColorForm = ({ addColor }) => {
  const history = useHistory();
  const INITIAL_STATE = {
    color: "",
    hex: "#ffffff",
  };
  const [color, setColor] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ [color.color]: color.hex });
    setColor(INITIAL_STATE);
    history.push("/colors");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setColor((color) => ({
      ...color,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="color"
          value={color.color}
          onChange={handleChange}
        />
        <input
          type="color"
          name="hex"
          value={color.hex}
          onChange={handleChange}
        />
        <button>COOL</button>
      </form>
    </div>
  );
};

export default ColorForm;
