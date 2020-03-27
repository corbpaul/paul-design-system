import { style, styleMap } from "treat";
import { mapToStyleProperty } from "./utils";

// export const color = style(theme => ({
//   color: theme.brand
// }));

export const fontFamily = style(({ typography }) => ({
  fontFamily: typography.fontFamily
}));

export const fontSize = styleMap(({ typography }) =>
  mapToStyleProperty(typography.fontSize, "fontSize")
);

export const fontWeight = styleMap(({ typography }) =>
  mapToStyleProperty(typography.fontWeight, "fontWeight")
);
