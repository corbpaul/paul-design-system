import React, { ReactNode } from "react";

import { Box, IBoxProps } from "../Box/Box";
import {
  IUseTextStylesProps,
  useTextStyles,
} from "../Typography/useTypographyStyles";

export interface ITextProps extends Pick<IBoxProps, "component"> {
  baseline?: IUseTextStylesProps["baseline"];
  children?: ReactNode;
  color?: IUseTextStylesProps["color"];
  size?: IUseTextStylesProps["size"];
  textTransform?: IUseTextStylesProps["textTransform"];
  weight?: IUseTextStylesProps["weight"];
}

export const Text = ({
  baseline = true,
  children,
  color,
  component = "span",
  size,
  textTransform,
  weight,
}: ITextProps) => {
  const textStyles = useTextStyles({
    baseline,
    color,
    size,
    textTransform,
    weight,
  });

  return (
    <Box className={textStyles} component={component} display="block">
      {children}
    </Box>
  );
};
