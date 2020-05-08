import React, { ReactNode } from "react";
import {
  HeadingLevel,
  HeadingWeight,
  useHeadingStyles,
} from "../../Typography/useTypographyStyles";
import { Box, IBoxProps } from "../Box/Box";
import HeadingContext from "./HeadingContext";

const resolveDefaultComponent = {
  "1": "h1",
  "2": "h2",
  "3": "h3",
  "4": "h4",
} as const;

export interface IHeadingProps {
  children: ReactNode;
  level: HeadingLevel;
  weight?: HeadingWeight;
  align?: IBoxProps["textAlign"];
  component?: IBoxProps["component"];
  id?: string;
  truncate?: boolean;
}

export const Heading = ({
  level,
  weight,
  component,
  children,
  align,
  id,
}: IHeadingProps) => {
  const headingStyles = useHeadingStyles({ baseline: true, level, weight });

  return (
    <HeadingContext.Provider value={true}>
      <Box
        id={id}
        component={component || resolveDefaultComponent[level]}
        textAlign={align}
        className={headingStyles}
      >
        {children}
      </Box>
    </HeadingContext.Provider>
  );
};
