import { Properties } from "csstype";
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

export const margin = {
  top: styleMap((theme) => spaceMapToCss(theme, "marginTop")),
};
