import { createElement, ReactNode } from "react";

import { IUseTextProps, useTextStyles } from "./useTextStyles";

export interface ITextProps {
  children?: ReactNode;
  size?: IUseTextProps["size"];
  weight?: IUseTextProps["weight"];
}

export const Text = ({ children, size, weight }: ITextProps) => {
  const textStyles = useTextStyles({ size, weight });

  return createElement("span", {
    children,
    className: textStyles,
  });
};
