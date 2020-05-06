import classnames from "classnames";
import { ElementType } from "react";
import { useStyles } from "react-treat";
import { Theme } from "treat/theme";
import { resolveResponsiveProp, ResponsiveProp } from "./responsiveProp";

import * as resetStyleRefs from "../../reset/reset.treat";
import * as styleRefs from "./Box.treat";

export type Image = keyof Theme["image"] | "none";
export type Space = keyof Theme["space"] | "none";
export type ResponsiveSpace = ResponsiveProp<Space>;

export interface IUseBoxStylesProps {
  background?: keyof typeof styleRefs.background;
  borderRadius?: keyof typeof styleRefs.borderRadius;
  className?: Parameters<typeof classnames>[0];
  component: ElementType | null;
  display?: ResponsiveProp<keyof typeof styleRefs.display>;
  image?: Image;
  margin?: ResponsiveSpace;
  marginTop?: ResponsiveSpace;
  marginRight?: ResponsiveSpace;
  marginBottom?: ResponsiveSpace;
  marginLeft?: ResponsiveSpace;
  marginX?: ResponsiveSpace;
  marginY?: ResponsiveSpace;
  objectFit?: keyof typeof styleRefs.objectFit;
  overflow?: keyof typeof styleRefs.overflow;
  padding?: ResponsiveSpace;
  paddingTop?: ResponsiveSpace;
  paddingRight?: ResponsiveSpace;
  paddingBottom?: ResponsiveSpace;
  paddingLeft?: ResponsiveSpace;
  paddingX?: ResponsiveSpace;
  paddingY?: ResponsiveSpace;
  position?: keyof typeof styleRefs.position;
  top?: keyof typeof styleRefs.relativePosition.top;
  right?: keyof typeof styleRefs.relativePosition.right;
  bottom?: keyof typeof styleRefs.relativePosition.bottom;
  left?: keyof typeof styleRefs.relativePosition.left;
  width?: keyof typeof styleRefs.width;
  height?: keyof typeof styleRefs.height;
}

export const useBoxStyles = ({
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

  return classnames(
    className,
    component !== null && resetStyles.base,
    component !== null &&
      resetStyles.element[component as keyof typeof resetStyleRefs.element],
    resolvedMarginTop !== undefined &&
      resolveResponsiveProp(
        resolvedMarginTop,
        styles.margin.top,
        styles.marginTablet.top,
        styles.marginDesktop.top,
      ),
    resolvedMarginRight !== undefined &&
      resolveResponsiveProp(
        resolvedMarginRight,
        styles.margin.right,
        styles.marginTablet.right,
        styles.marginDesktop.right,
      ),
    resolvedMarginBottom !== undefined &&
      resolveResponsiveProp(
        resolvedMarginBottom,
        styles.margin.bottom,
        styles.marginTablet.bottom,
        styles.marginDesktop.bottom,
      ),
    resolvedMarginLeft !== undefined &&
      resolveResponsiveProp(
        resolvedMarginLeft,
        styles.margin.left,
        styles.marginTablet.left,
        styles.marginDesktop.left,
      ),
    resolvedPaddingTop !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingTop,
        styles.padding.top,
        styles.paddingTablet.top,
        styles.paddingDesktop.top,
      ),
    resolvedPaddingRight !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingRight,
        styles.padding.right,
        styles.paddingTablet.right,
        styles.paddingDesktop.right,
      ),
    resolvedPaddingBottom !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingBottom,
        styles.padding.bottom,
        styles.paddingTablet.bottom,
        styles.paddingDesktop.bottom,
      ),
    resolvedPaddingLeft !== undefined &&
      resolveResponsiveProp(
        resolvedPaddingLeft,
        styles.padding.left,
        styles.paddingTablet.left,
        styles.paddingDesktop.left,
      ),
    display !== undefined &&
      resolveResponsiveProp(
        display,
        styles.display,
        styles.displayTablet,
        styles.displayDesktop,
      ),
    styles.background[background!],
    styles.borderRadius[borderRadius!],
    styles.objectFit[objectFit!],
    styles.overflow[overflow!],
    styles.position[position!],
    styles.relativePosition.top[top!],
    styles.relativePosition.bottom[bottom!],
    styles.relativePosition.right[right!],
    styles.relativePosition.left[left!],
    styles.width[width!],
    styles.height[height!],
    styles.image[image!],
  );
};
