import classnames from "classnames";
import { Properties } from "csstype";
import { Theme } from "treat/theme";

export interface IUseBoxStylesProps {
  className?: Parameters<typeof classnames>[0];
}

const spaceMapToCss = (theme: Theme, cssPropertyName: keyof Properties) => {};

export const useBoxStyles = ({ className }: IUseBoxStylesProps) => {
  return classnames(className);
};
