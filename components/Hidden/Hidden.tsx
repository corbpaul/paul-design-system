import React, { ReactNode } from "react";
import { useStyles } from "react-treat";

import { Box } from "../Box/Box";
import {
  IResponsiveRangeProps,
  resolveResponsiveRangeProps,
} from "../utils/responsiveRangeProps";

import * as styleRefs from "./Hidden.treat";

export interface IHiddenProps extends IResponsiveRangeProps {
  children: ReactNode;
  screen?: boolean;
  print?: boolean;
  inline?: boolean;
}

export const Hidden = ({
  children,
  above,
  below,
  screen,
  print,
  inline,
}: IHiddenProps) => {
  const hiddenOnScreen = Boolean(screen);
  const hiddenOnPrint = Boolean(print);

  const [
    hiddenOnMobile,
    hiddenOnTablet,
    hiddenOnDesktop,
  ] = resolveResponsiveRangeProps({ above, below });

  const styles = useStyles(styleRefs);
  const display = inline ? "inline" : "block";

  return (
    <Box
      display={
        hiddenOnScreen
          ? "none"
          : [
              hiddenOnMobile ? "none" : display,
              hiddenOnTablet ? "none" : display,
              hiddenOnDesktop ? "none" : display,
            ]
      }
      className={hiddenOnPrint ? styles.hiddenOnPrint : undefined}
      component={inline ? "span" : "div"}
    >
      {children}
    </Box>
  );
};
