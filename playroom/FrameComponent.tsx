import React, { Fragment, ReactNode } from "react";
import { ThemeProvider } from "../components";
import { Theme } from "../themes/Theme";

interface IFrameProps {
  theme: Theme;
  children: ReactNode;
}

export default ({ theme, children }: IFrameProps) => (
  <Fragment>
    <ThemeProvider theme={theme}>
      <Fragment>{children}</Fragment>
    </ThemeProvider>
  </Fragment>
);
