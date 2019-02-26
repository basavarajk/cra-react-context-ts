import { ThemeType, ThemeActionType } from "./types";

export const setTheme = (theme: ThemeType) => ({
  type: ThemeActionType.SET_THEME,
  theme
});
