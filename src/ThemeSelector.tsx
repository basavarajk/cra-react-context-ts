import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { setTheme } from "./store/actions";
import { ThemeType } from "./store/types";

const ThemeSelector = () => {
  const [{ theme }, dispatch] = useContext(ThemeContext);
  return (
    <div>
      <select>
        <option onClick={() => dispatch(setTheme(ThemeType.LIGHT))}>
          LIGHT
        </option>
        <option onClick={() => dispatch(setTheme(ThemeType.DARK))}>DARK</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
