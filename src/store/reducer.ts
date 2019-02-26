import { Reducer } from "react";
import { ThemeAction, ThemeType, ThemeActionType } from "./types";

const reducer: Reducer<ThemeType, ThemeAction> = (
  state = ThemeType.LIGHT,
  action
) => {
  switch (action.type) {
    case ThemeActionType.SET_THEME:
      return action.theme;
    default:
      return state;
  }
};

export default reducer;
