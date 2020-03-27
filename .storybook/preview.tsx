import { addDecorator, addParameters } from "@storybook/react";

import * as themes from "../themes";
import { withTreatTheme } from "./storybook-addon-treat-theme";

addDecorator(withTreatTheme);
addParameters({
  themes: { themes },
});
