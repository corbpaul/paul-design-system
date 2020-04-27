import classnames from "classnames";
import { ElementType } from "react";
import { useStyles } from "react-treat";
import { Theme } from "treat/theme";

import * as resetStyleRefs from "../../reset/reset.treat";
import * as styleRefs from "./Box.treat";

export type Space = keyof Theme["space"] | "none";

export interface IUseBoxStylesProps {
  background?: keyof typeof styleRefs.background;
  className?: Parameters<typeof classnames>[0];
  component: ElementType | null;
  display?: string;
  margin?: Space;
  marginTop?: Space;
  marginRight?: Space;
  marginBottom?: Space;
  marginLeft?: Space;
  marginX?: Space;
  marginY?: Space;
  padding?: Space;
  paddingTop?: Space;
  paddingRight?: Space;
  paddingBottom?: Space;
  paddingLeft?: Space;
  paddingX?: Space;
  paddingY?: Space;
}

export const useBoxStyles = ({
  background,
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
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
}: IUseBoxStylesProps) => {
  const resetStyles = useStyles(resetStyleRefs);
  const styles = useStyles(styleRefs);

  const resolvedMarginTop = marginTop || marginY || margin;
  const resolvedMarginRight = marginRight || marginX || margin;
  const resolvedMarginBottom = marginBottom || marginY || margin;
  const resolvedMarginLeft = marginLeft || marginX || margin;

  const resolvedPaddingTop = paddingTop || paddingY || padding;
  const resolvedPaddingRight = paddingRight || paddingX || padding;
  const resolvedPaddingBottom = paddingBottom || paddingY || padding;
  const resolvedPaddingLeft = paddingLeft || paddingX || padding;

  console.log(styles.display);

  return classnames(
    className,
    component !== null && resetStyles.base,
    component !== null &&
      resetStyles.element[component as keyof typeof resetStyleRefs.element],
    resolvedMarginTop && styles.margin.top[resolvedMarginTop],
    resolvedMarginRight && styles.margin.right[resolvedMarginRight],
    resolvedMarginBottom && styles.margin.bottom[resolvedMarginBottom],
    resolvedMarginLeft && styles.margin.left[resolvedMarginLeft],
    resolvedPaddingTop && styles.padding.top[resolvedPaddingTop],
    resolvedPaddingRight && styles.padding.right[resolvedPaddingRight],
    resolvedPaddingBottom && styles.padding.bottom[resolvedPaddingBottom],
    resolvedPaddingLeft && styles.padding.left[resolvedPaddingLeft],
    styles.background[background!],
    display !== undefined && styles.display[display],
  );
};
