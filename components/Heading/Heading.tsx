import React, { ReactNode } from "react";
import { Box, IBoxProps } from "../Box/Box";
import {
  HeadingLevel,
  HeadingWeight,
  IUseHeadingStyleProps,
  useHeadingStyles,
} from "../Typography/useTypographyStyles";
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
  textTransform?: IUseHeadingStyleProps["textTransform"];
}

export const Heading = ({
  level,
  weight,
  component,
  children,
  align,
  id,
  textTransform,
}: IHeadingProps) => {
  const headingStyles = useHeadingStyles({
    baseline: true,
    level,
    weight,
    textTransform,
  });

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
