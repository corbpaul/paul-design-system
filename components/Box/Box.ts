import { AllHTMLAttributes, createElement, ElementType } from "react";

import { renderBackgroundProvider } from "./BackgroundContext";
import { IUseBoxStylesProps, useBoxStyles } from "./useBoxStyles";

export interface IBoxProps
  extends Omit<IUseBoxStylesProps, "component">,
    Omit<AllHTMLAttributes<HTMLElement>, "className"> {
  component?: ElementType;
}

export const Box = ({
  background,
  borderRadius,
  className,
  component = "div",
  display,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  overflow,
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
    background,
    borderRadius,
    className,
    component,
    display,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    marginX,
    marginY,
    overflow,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingX,
    paddingY,
  });

  const element = createElement(component, {
    className: boxStyles,
    ...restProps,
  });

  return renderBackgroundProvider(background, element);
};
