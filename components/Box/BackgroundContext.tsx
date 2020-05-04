import React, { createContext, ReactElement, useContext } from "react";

import { useTheme } from "../ThemeProvider/ThemeProvider";
import { IUseBoxStylesProps } from "./useBoxStyles";

export type BackgroundVariant =
  | IUseBoxStylesProps["background"]
  | "UNKNOWN_DARK"
  | "UNKNOWN_LIGHT";

const backgroundContext = createContext<BackgroundVariant | null>(null);

export const BackgroundProvider = backgroundContext.Provider;

export const renderBackgroundProvider = (
  background: BackgroundVariant,
  element: ReactElement | null,
) =>
  background ? (
    <BackgroundProvider value={background}>{element}</BackgroundProvider>
  ) : (
    element
  );

export const useBackground = () => useContext(backgroundContext);

export const useBackgroundLightness = (
  backgroundeOverride?: ReturnType<typeof useBackground>,
) => {
  const backgroundFromContext = useBackground();
  const background = backgroundeOverride || backgroundFromContext;
  const { backgroundLightness } = useTheme();
  const defaultLightness = backgroundLightness.body;

  if (background === "UNKNOWN_DARK") {
    return "dark";
  }

  if (background === "UNKNOWN_LIGHT") {
    return "light";
  }

  return background
    ? backgroundLightness[background] || defaultLightness
    : defaultLightness;
};
