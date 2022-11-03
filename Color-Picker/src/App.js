import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Colors from "./Colors";
import Color from "./Color";
import ColorForm from "./ColorForm";
import "./App.css";

function App() {
  const INITIAL_COLORS = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };
  const [colors, setColors] = useState(INITIAL_COLORS);
  useEffect(() => localStorage.setItem("colors", JSON.stringify(colors)), [
    colors,
  ]);
  const addColor = (color) => {
    setColors((colors) => ({ ...colors, ...color }));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <Colors colors={colors} />
          </Route>
          <Route exact path="/colors/new">
            <ColorForm addColor={addColor} />
          </Route>
          <Route exact path="/colors/:color">
            <Color colors={colors} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
