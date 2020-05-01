import { style } from "treat";

export const outer = style(({ utils, grid, typography }) =>
  utils.resposiveStyle({
    mobile: { height: grid * typography.text.xsmall.mobile.rows },
    tablet: { height: grid * typography.text.xsmall.tablet.rows },
  }),
);
