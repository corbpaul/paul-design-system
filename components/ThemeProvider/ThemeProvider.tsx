import React, { createContext, ReactNode, useContext } from "react";
import { TreatProvider } from "react-treat";

import { Theme } from "../../themes/Theme";

const ThemeContext = createContext<Theme | null>(null);
export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (theme === null) {
    throw new Error("No theme available on context");
  }

  return theme;
};

export interface IThemeProviderProps {
  theme: Theme;
  children: ReactNode;
}

export const ThemeProvider = ({ theme, children }: IThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <TreatProvider theme={theme.treatTheme}>{children}</TreatProvider>
    </ThemeContext.Provider>
  );
};
