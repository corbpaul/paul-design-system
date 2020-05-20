import { mapValues } from "lodash";
import { style, styleMap } from "treat";
import { TreatTokens } from "../../themes/makeTheme";

const columnsWidths = {
  1: "100%",
  2: `${100 / 2}%`,
  3: `${100 / 3}%`,
  4: `${100 / 4}%`,
  5: `${100 / 5}%`,
  6: `${100 / 6}%`,
} as const;

type ColumnWidths = Record<keyof typeof columnsWidths, string>;
const makeColumnsAtoms = (breakpoint: keyof TreatTokens["breakpoint"]) =>
  styleMap(
    (theme) =>
      mapValues(columnsWidths, (width) =>
        theme.utils.responsiveStyle({ [breakpoint]: { flex: `0 0 ${width}` } }),
      ),
    `columns_${breakpoint}`,
  ) as ColumnWidths;

export const columnsMobile = makeColumnsAtoms("mobile");
export const columnsTablet = makeColumnsAtoms("tablet");
export const columnsDesktop = makeColumnsAtoms("desktop");
