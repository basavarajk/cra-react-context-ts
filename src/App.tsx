import React, { useReducer } from "react";
import ThemeContext from "./ThemeContext";
import reducer from "./store/reducer";
import { ThemeType } from "./store/types";
import ThemeSelector from "./ThemeSelector";

const App = () => (
  <ThemeContext.Provider value={useReducer(reducer, ThemeType.LIGHT)}>
    <ThemeSelector />
  </ThemeContext.Provider>
);

export default App;
