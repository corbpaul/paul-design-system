import { addDecorator } from "@storybook/react";
import React from "react";

import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";
import { theme1 } from "../themes";

import "../reset";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme1}>{storyFn()}</ThemeProvider>
));
