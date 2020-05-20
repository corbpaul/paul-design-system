import React, { Children, createContext, ReactElement, useMemo } from "react";

import { Box } from "../Box/Box";
import { ResponsiveSpace, Space } from "../Box/useBoxStyles";
import { ColumnProps } from "../Column/Column";

import {
  normaliseResponsiveProp,
  resolveResponsiveProp,
  ResponsiveProp,
} from "../../utils/responsiveProp";
import {
  ResponsiveRangeProps,
  resolveResponsiveRangeProps,
} from "../../utils/responsiveRangeProps";

interface ColumnsContextValue {
  collapseMobile: boolean;
  collapseTablet: boolean;
  mobileSpace: Space;
  tabletSpace: Space;
  desktopSpace: Space;
}

export const ColumnsContext = createContext<ColumnsContextValue>({
  collapseMobile: false,
  collapseTablet: false,
  mobileSpace: "none",
  tabletSpace: "none",
  desktopSpace: "none",
});

export interface ColumsProps {
  children:
    | Array<ReactElement<ColumnProps> | null>
    | ReactElement<ColumnProps>
    | null;
  collapseBelow?: ResponsiveRangeProps["below"];
  reverse?: boolean;
  space: ResponsiveSpace;
}

export const Columns = ({
  children,
  collapseBelow,
  reverse = false,
  space = "none",
}: ColumsProps) => {
  const [mobileSpace, tabletSpace, desktopSpace] = normaliseResponsiveProp(
    space,
  );

  const [collapseMobile, collapseTablet] = resolveResponsiveRangeProps({
    below: collapseBelow,
  });

  const columnsContextValue = useMemo(
    () => ({
      collapseMobile,
      collapseTablet,
      mobileSpace,
      tabletSpace,
      desktopSpace,
    }),
    [collapseMobile, collapseTablet, mobileSpace, tabletSpace, desktopSpace],
  );

  const rowReverseTablet = collapseMobile && reverse;
  const rowReverseDesktop = (collapseMobile || collapseTablet) && reverse;
  const reverseDocumentOrder = !collapseMobile && !collapseTablet && reverse;

  return (
    <Box
      display={[
        collapseMobile ? "block" : "flex",
        collapseTablet ? "block" : "flex",
        "flex",
      ]}
      flexDirection={[
        collapseMobile ? "column" : "row",
        collapseTablet ? "column" : rowReverseTablet ? "rowReverse" : "row",
        rowReverseDesktop ? "rowReverse" : "row",
      ]}
    >
      <ColumnsContext.Provider value={columnsContextValue}>
        {reverseDocumentOrder ? Children.toArray(children).reverse() : children}
      </ColumnsContext.Provider>
    </Box>
  );
};
