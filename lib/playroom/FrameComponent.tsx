import React, { Fragment, ReactNode } from "react";
import WebFont from "webfontloader";
import { ThemeProvider } from "../components";
import { Theme } from "../themes/Theme";

import "../reset";

interface FrameProps {
  theme: Theme;
  children: ReactNode;
}

const loadWebFont = (font: string, weights: number[]) => {
  WebFont.load({
    google: {
      families: [`${font}:${weights.sort().join(",")}`],
    },
  });
};

export default ({ theme, children }: FrameProps) => {
  theme.webFonts.map(({ font, weights }) => {
    loadWebFont(font, weights);
  });

  return (
    <ThemeProvider theme={theme}>
      <Fragment>{children}</Fragment>
    </ThemeProvider>
  );
};
