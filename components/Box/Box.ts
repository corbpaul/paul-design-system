import { AllHTMLAttributes, createElement, ElementType } from "react";

import { renderBackgroundProvider } from "./BackgroundContext";
import { IUseBoxStylesProps, useBoxStyles } from "./useBoxStyles";

export interface IBoxProps
  extends Omit<IUseBoxStylesProps, "component">,
    Omit<AllHTMLAttributes<HTMLElement>, "width" | "height" | "className"> {
  component?: ElementType;
}

export const Box = ({
  background,
  borderRadius,
  className,
  component = "div",
  display,
  image,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  objectFit,
  overflow,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  position,
  top,
  right,
  bottom,
  left,
  width,
  height,
  ...restProps
}: IBoxProps) => {
  const boxStyles = useBoxStyles({
    background,
    borderRadius,
    className,
    component,
    display,
    image,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    marginX,
    marginY,
    objectFit,
    overflow,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingX,
    paddingY,
    position,
    top,
    right,
    bottom,
    left,
    width,
    height,
  });

  const element = createElement(component, {
    className: boxStyles,
    ...restProps,
  });

  return renderBackgroundProvider(background, element);
};
