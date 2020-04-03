import React, { ReactNode } from "react";
import { Box, IBoxProps } from "../Box/Box";
import { IUseTextStylesProps, useTextStyles } from "./useTextStyles";

export interface ITextProps extends Pick<IBoxProps, "component"> {
  children?: ReactNode;
  size?: IUseTextStylesProps["size"];
  weight?: IUseTextStylesProps["weight"];
}

export const Text = ({
  children,
  component = "span",
  size,
  weight,
}: ITextProps) => {
  const textStyles = useTextStyles({ size, weight });

  return (
    <Box className={textStyles} component={component}>
      {children}
    </Box>
  );
};
