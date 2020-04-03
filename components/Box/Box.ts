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
  ...restProps
}: IBoxProps) => {
  const boxStyles = useBoxStyles({ className });
  return createElement(component, { className: boxStyles, ...restProps });
};
