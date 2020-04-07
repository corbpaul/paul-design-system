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
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  ...restProps
}: IBoxProps) => {
  const boxStyles = useBoxStyles({
    className,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    marginX,
    marginY,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingX,
    paddingY,
  });
  return createElement(component, { className: boxStyles, ...restProps });
};
