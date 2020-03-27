import React, { useState } from "react";
import { addons, makeDecorator } from "@storybook/addons";
import { TreatProvider } from "react-treat";
import { values } from "lodash";
import WebFont from "webfontloader";

import { EVENTS } from "./constants";

const loadWebFont = (font, weights) => {
  WebFont.load({
    google: {
      families: [`${font}:${weights.sort().join(",")}`],
    },
  });
};

export const withTreatTheme = makeDecorator({
  name: "withTreatTheme",
  parameterName: "themes",
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, settings) => {
    const story = getStory(context);
    const channel = addons.getChannel();
    const storyThemes = values(settings.parameters.themes);
    const initialTheme = storyThemes[0];

    const [currentTheme, setCurrentTheme] = useState(initialTheme.treatTheme);

    if (initialTheme.webFonts) {
      initialTheme.webFonts.map(({ font, weights }) => {
        loadWebFont(font, weights);
      });
    }

    channel.on(EVENTS.CHANGE, (theme, webFonts) => {
      setCurrentTheme(theme);

      if (webFonts.length > 0) {
        webFonts.map(({ font, weights }) => {
          loadWebFont(font, weights);
        });
      }
    });

    return <TreatProvider theme={currentTheme}>{story}</TreatProvider>;
  },
});
