import React, { ReactNode } from "react";

import { Box, IBoxProps } from "../Box/Box";
import { IUseTextStylesProps, useTextStyles } from "./useTextStyles";

export interface ITextProps extends Pick<IBoxProps, "component"> {
  baseline?: IUseTextStylesProps["baseline"];
  children?: ReactNode;
  size?: IUseTextStylesProps["size"];
  weight?: IUseTextStylesProps["weight"];
}

export const Text = ({
  baseline = true,
  children,
  component = "span",
  size,
  weight,
}: ITextProps) => {
  const textStyles = useTextStyles({ baseline, size, weight });

  return (
    <Box className={textStyles} component={component} display="block">
      {children}
    </Box>
  );
};
