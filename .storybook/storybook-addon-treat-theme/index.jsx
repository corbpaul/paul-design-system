import React, { useState } from "react";
import { addons, makeDecorator } from "@storybook/addons";
import { TreatProvider } from "react-treat";
import { values } from "lodash";

import { EVENTS } from "./constants";

export const withTreatTheme = makeDecorator({
  name: "withTreatTheme",
  parameterName: "themes",
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, settings) => {
    const story = getStory(context);
    const channel = addons.getChannel();
    const storyThemes = values(settings.parameters.themes);

    const [currentTheme, setCurrentTheme] = useState(storyThemes[0].treatTheme);

    channel.on(EVENTS.CHANGE, theme => {
      setCurrentTheme(theme);
    });

    return <TreatProvider theme={currentTheme}>{story}</TreatProvider>;
  }
});
