import React, { useState } from "react";
import { addons, makeDecorator } from "@storybook/addons";
import { values } from "lodash";
import WebFont from "webfontloader";

import { ThemeProvider } from "../../components/ThemeProvider/ThemeProvider";

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

    const [currentTheme, setCurrentTheme] = useState(initialTheme);
    const [currentBg, setCurrentBg] = useState(initialTheme.background);

    if (initialTheme.webFonts) {
      initialTheme.webFonts.map(({ font, weights }) => {
        loadWebFont(font, weights);
      });
    }

    channel.on(EVENTS.CHANGE, (theme, webFonts, bg) => {
      setCurrentTheme(theme);
      setCurrentBg(bg);

      if (webFonts.length > 0) {
        webFonts.map(({ font, weights }) => {
          loadWebFont(font, weights);
        });
      }
    });

    return (
      <ThemeProvider theme={currentTheme}>
        <style type="text/css">{`body{margin:0;padding:0;background:${currentBg}}`}</style>
        {story}
      </ThemeProvider>
    );
  },
});

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
