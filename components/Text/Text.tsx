import React, { ReactNode, useContext, useMemo } from "react";

import { Box, IBoxProps } from "../full/Box/Box";
import {
  IUseTextStylesProps,
  useTextStyles,
} from "../Typography/useTypographyStyles";
import TextContext from "./TextContext";

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

  const textContextValue = useMemo(
    () => ({
      color,
      size,
      weight,
      baseline,
    }),
    [color, size, weight, baseline],
  );

  if (process.env.NODE_ENV !== "production") {
    const inText = useContext(TextContext);

    if (inText) {
      throw new Error(
        "Text components should not be nested within each other.",
      );
    }
  }

  return (
    <TextContext.Provider value={textContextValue}>
      <Box className={textStyles} component={component} display="block">
        {children}
      </Box>
    </TextContext.Provider>
  );
};
