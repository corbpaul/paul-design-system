import { Properties } from "csstype";
import { omit } from "lodash";
import { styleMap } from "treat";
import { Theme } from "treat/theme";
import { mapToStyleProperty } from "../../utils/utils";

const spaceMapToCss = (
  theme: Theme,
  cssPropertyName: keyof Properties,
  breakpoint: keyof Theme["breakpoint"],
) => {
  const spaces = {
    ...theme.space,
    none: 0,
  };

  return mapToStyleProperty(spaces, cssPropertyName, (value, propertyName) => {
    const styles = {
      [propertyName]: value * theme.grid,
    };

    const minWidth = theme.breakpoint[breakpoint];

    return minWidth === 0
      ? styles
      : { "@media": { [`screen and (min-width: ${minWidth}px)`]: styles } };
  });
};

export const background = styleMap(({ color }) =>
  mapToStyleProperty(omit(color.background, "body"), "backgroundColor"),
);

export const margin = {
  top: styleMap((theme) => spaceMapToCss(theme, "marginTop", "mobile")),
  right: styleMap((theme) => spaceMapToCss(theme, "marginRight", "mobile")),
  bottom: styleMap((theme) => spaceMapToCss(theme, "marginBottom", "mobile")),
  left: styleMap((theme) => spaceMapToCss(theme, "marginLeft", "mobile")),
};
export const marginTablet = {
  top: styleMap((theme) => spaceMapToCss(theme, "marginTop", "tablet")),
  right: styleMap((theme) => spaceMapToCss(theme, "marginRight", "tablet")),
  bottom: styleMap((theme) => spaceMapToCss(theme, "marginBottom", "tablet")),
  left: styleMap((theme) => spaceMapToCss(theme, "marginLeft", "tablet")),
};
export const marginDesktop = {
  top: styleMap((theme) => spaceMapToCss(theme, "marginTop", "desktop")),
  right: styleMap((theme) => spaceMapToCss(theme, "marginRight", "desktop")),
  bottom: styleMap((theme) => spaceMapToCss(theme, "marginBottom", "desktop")),
  left: styleMap((theme) => spaceMapToCss(theme, "marginLeft", "desktop")),
};

export const padding = {
  top: styleMap((theme) => spaceMapToCss(theme, "paddingTop", "mobile")),
  right: styleMap((theme) => spaceMapToCss(theme, "paddingRight", "mobile")),
  bottom: styleMap((theme) => spaceMapToCss(theme, "paddingBottom", "mobile")),
  left: styleMap((theme) => spaceMapToCss(theme, "paddingLeft", "mobile")),
};
export const paddingTablet = {
  top: styleMap((theme) => spaceMapToCss(theme, "paddingTop", "tablet")),
  right: styleMap((theme) => spaceMapToCss(theme, "paddingRight", "tablet")),
  bottom: styleMap((theme) => spaceMapToCss(theme, "paddingBottom", "tablet")),
  left: styleMap((theme) => spaceMapToCss(theme, "paddingLeft", "tablet")),
};
export const paddingDesktop = {
  top: styleMap((theme) => spaceMapToCss(theme, "paddingTop", "desktop")),
  right: styleMap((theme) => spaceMapToCss(theme, "paddingRight", "desktop")),
  bottom: styleMap((theme) => spaceMapToCss(theme, "paddingBottom", "desktop")),
  left: styleMap((theme) => spaceMapToCss(theme, "paddingLeft", "desktop")),
};

const displayRules = {
  block: "block",
  inline: "inline",
  none: "none",
  inlineBlock: "inline-block",
  flex: "flex",
};
export const display = styleMap(mapToStyleProperty(displayRules, "display"));
export const displayTablet = styleMap(({ utils: { resposiveStyle } }) =>
  mapToStyleProperty(displayRules, "display", (value, propertyName) =>
    resposiveStyle({
      tablet: { [propertyName]: value },
    }),
  ),
);
export const displayDesktop = styleMap(({ utils: { resposiveStyle } }) =>
  mapToStyleProperty(displayRules, "display", (value, propertyName) =>
    resposiveStyle({
      desktop: { [propertyName]: value },
    }),
  ),
);

export const borderRadius = {
  ...styleMap(
    ({ border }) => mapToStyleProperty(border.radius, "borderRadius"),
    "borderRadius",
  ),
};

const overflowRules = {
  hidden: "hidden",
  scroll: "scroll",
  visible: "visible",
  auto: "auto",
};
export const overflow = styleMap(mapToStyleProperty(overflowRules, "overflow"));
