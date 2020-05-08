import { withA11y } from "@storybook/addon-a11y";
import { addDecorator } from "@storybook/react";
import React from "react";

import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";
import { theme1 } from "../themes";

import "../reset";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme1}>
    <style type="text/css">{`body{margin:0;padding:0;background:${theme1.color.background.body}}`}</style>
    {storyFn()}
  </ThemeProvider>
));
addDecorator(withA11y);
