import React, { ReactNode } from "react";

import { Box, IBoxProps } from "../Box/Box";
import {
  HeadingLevel,
  HeadingWeight,
  useHeadingStyles,
} from "../Text/useTextStyles";

const resolveDefaultComponent = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
} as const;

export interface IHeadingProps extends Pick<IBoxProps, "component"> {
  children?: ReactNode;
  component?: IBoxProps["component"];
  level: HeadingLevel;
  weight?: HeadingWeight;
}

export const Heading = ({
  children,
  component,
  level,
  weight,
}: IHeadingProps) => {
  const headingStyles = useHeadingStyles({ baseline: true, level, weight });

  return (
    <Box
      className={headingStyles}
      component={component || resolveDefaultComponent[level]}
    >
      {children}
    </Box>
  );
};
