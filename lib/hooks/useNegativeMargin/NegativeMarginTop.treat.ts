import { style, styleMap } from "treat";
import { mapToStyleProperty } from "../../utils/mapToStyleProperty";

const preventCollapse = 1;

const negativeMarginTop = (grid: number, rows: number) => ({
  ":before": { marginTop: -(grid * rows) - preventCollapse },
});

export const base = style({
  paddingTop: preventCollapse,
  ":before": { content: '""', display: "block" },
});

export const mobile = styleMap(({ space, grid }) =>
  mapToStyleProperty({ none: 0, ...space }, "marginTop", (rows: number) =>
    negativeMarginTop(grid, rows),
  ),
);

export const tablet = styleMap(({ space, grid, utils }) =>
  mapToStyleProperty({ none: 0, ...space }, "marginTop", (rows: number) =>
    utils.responsiveStyle({ tablet: negativeMarginTop(grid, rows) }),
  ),
);

export const desktop = styleMap(({ space, grid, utils }) =>
  mapToStyleProperty({ none: 0, ...space }, "marginTop", (rows: number) =>
    utils.responsiveStyle({ desktop: negativeMarginTop(grid, rows) }),
  ),
);
