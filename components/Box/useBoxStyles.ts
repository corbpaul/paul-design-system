import classnames from "classnames";
import { useStyles } from "react-treat";
import { Theme } from "treat/theme";
import * as styleRefs from "./Box.treat";

export type Space = keyof Theme["space"] | "none";

export interface IUseBoxStylesProps {
  className?: Parameters<typeof classnames>[0];
  margin?: Space;
  marginTop?: Space;
  marginY?: Space;
}

export const useBoxStyles = ({
  className,
  margin,
  marginTop,
  marginY,
}: IUseBoxStylesProps) => {
  const styles = useStyles(styleRefs);

  const resolvedMarginTop = marginTop || marginY || margin;

  return classnames(
    className,
    resolvedMarginTop && styles.margin.top[resolvedMarginTop],
  );
};
