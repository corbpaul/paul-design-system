import { createElement, ReactNode } from "react";

import { useTextStyles, UseTextProps } from "./useTextStyles";

export interface TextProps {
  children?: ReactNode;
  size?: UseTextProps["size"];
  weight?: UseTextProps["weight"];
}

export const Text = ({ children, size, weight }: TextProps) => {
  const textStyles = useTextStyles({ size, weight });

  return createElement("span", {
    className: textStyles,
    children
  });
};
