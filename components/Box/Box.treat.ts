import { Properties } from "csstype";
import { omit } from "lodash";
import { styleMap } from "treat";
import { Theme } from "treat/theme";
import { mapToStyleProperty } from "../../utils/utils";

const spaceMapToCss = (theme: Theme, cssPropertyName: keyof Properties) => {
  const spaces = {
    ...theme.space,
    none: 0,
  };

  return mapToStyleProperty(spaces, cssPropertyName);
};

export const background = styleMap(({ color }) =>
  mapToStyleProperty(omit(color.background, "body"), "backgroundColor"),
);

export const margin = {
  top: styleMap((theme) => spaceMapToCss(theme, "marginTop")),
  right: styleMap((theme) => spaceMapToCss(theme, "marginRight")),
  bottom: styleMap((theme) => spaceMapToCss(theme, "marginBottom")),
  left: styleMap((theme) => spaceMapToCss(theme, "marginLeft")),
};

export const padding = {
  top: styleMap((theme) => spaceMapToCss(theme, "paddingTop")),
  right: styleMap((theme) => spaceMapToCss(theme, "paddingRight")),
  bottom: styleMap((theme) => spaceMapToCss(theme, "paddingBottom")),
  left: styleMap((theme) => spaceMapToCss(theme, "paddingLeft")),
};

const displayRules = {
  block: "block",
  inline: "inline",
  none: "none",
  inlineBlock: "inline-block",
  flex: "flex",
};
export const display = styleMap(mapToStyleProperty(displayRules, "display"));
