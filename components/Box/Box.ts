import { AllHTMLAttributes, createElement, ElementType } from "react";

import { IUseBoxStylesProps, useBoxStyles } from "./useBoxStyles";

export interface IBoxProps
  extends Omit<IUseBoxStylesProps, "component">,
    Omit<AllHTMLAttributes<HTMLElement>, "className"> {
  component?: ElementType;
}

export const Box = ({
  className,
  component = "div",
  margin,
  marginTop,
  marginY,
  ...restProps
}: IBoxProps) => {
  const boxStyles = useBoxStyles({ className, margin, marginTop, marginY });
  return createElement(component, { className: boxStyles, ...restProps });
};
