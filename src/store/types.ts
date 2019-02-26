export enum ThemeType {
  LIGHT = "LIGHT",
  DARK = "DARK"
}

export enum ThemeActionType {
  SET_THEME = "SET_THEME"
}

export type ThemeAction = {
  type: ThemeActionType.SET_THEME;
  theme: ThemeType;
};
