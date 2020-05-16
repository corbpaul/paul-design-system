import React, { Children, ReactNode } from "react";
import flattenChildren from "react-keyed-flatten-children";
import { useStyles } from "react-treat";

import { Box } from "../Box/Box";
import { ResponsiveSpace } from "../Box/useBoxStyles";
import { Divider, IDividerProps } from "../Divider/Divider";
import {
  normaliseResponsiveProp,
  resolveResponsiveProp,
  ResponsiveProp,
} from "../utils/responsiveProp";

import * as styleRefs from "./Tiles.treat";

export interface ITilesProps {
  children: ReactNode;
  space: ResponsiveSpace;
  columns: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6>;
  dividers?: boolean | IDividerProps["weight"];
}

export const Tiles = ({
  children,
  space = "none",
  columns = 1,
  dividers = false,
}: ITilesProps) => {
  const styles = useStyles(styleRefs);
  const responsiveSpace = normaliseResponsiveProp(space);

  const [
    mobileColumns,
    tabletColumns,
    desktopColumns,
  ] = normaliseResponsiveProp(columns);

  return (
    <Box display="flex" flexWrap="wrap">
      {Children.map(flattenChildren(children), (child, i) => (
        <Box
          minWidth={0}
          className={resolveResponsiveProp(
            columns,
            styles.columnsMobile,
            styles.columnsTablet,
            styles.columnsDesktop,
          )}
        >
          <Box
            height="full"
            paddingTop={responsiveSpace}
            paddingLeft={responsiveSpace}
          >
            {dividers && i > 0 ? (
              <Box
                paddingBottom={responsiveSpace}
                display={[
                  mobileColumns === 1 ? "block" : "none",
                  tabletColumns === 1 ? "block" : "none",
                  desktopColumns === 1 ? "block" : "none",
                ]}
              >
                {typeof dividers === "string" ? (
                  <Divider weight={dividers} />
                ) : (
                  <Divider />
                )}
              </Box>
            ) : null}
            {child}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
