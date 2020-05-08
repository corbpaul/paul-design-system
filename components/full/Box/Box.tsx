import {
  AllHTMLAttributes,
  createElement,
  ElementType,
  forwardRef,
} from "react";
import { renderBackgroundProvider } from "./BackgroundContext";
import { IUseBoxStylesProps, useBoxStyles } from "./useBoxStyles";

export interface IBoxProps
  extends Omit<IUseBoxStylesProps, "component">,
    Omit<AllHTMLAttributes<HTMLElement>, "width" | "height" | "className"> {
  component?: ElementType;
}

export const Box = forwardRef<HTMLElement, IBoxProps>(
  (
    {
      component = "div",
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      flexDirection,
      flexWrap,
      flexShrink,
      flexGrow,
      alignItems,
      justifyContent,
      textAlign,
      borderRadius,
      background,
      boxShadow,
      transition,
      transform,
      height,
      width,
      position,
      cursor,
      pointerEvents,
      overflow,
      minWidth,
      top,
      bottom,
      right,
      left,
      className,
      userSelect,
      ...restProps
    },
    ref,
  ) => {
    const boxStyles = useBoxStyles({
      component,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      flexDirection,
      flexWrap,
      flexShrink,
      flexGrow,
      alignItems,
      justifyContent,
      textAlign,
      borderRadius,
      background,
      boxShadow,
      transition,
      transform,
      height,
      width,
      position,
      cursor,
      pointerEvents,
      overflow,
      minWidth,
      top,
      bottom,
      right,
      left,
      className,
      userSelect,
    });

    const element = createElement(component, {
      className: boxStyles,
      ...restProps,
      ref,
    });

    return renderBackgroundProvider(background, element);
  },
);
