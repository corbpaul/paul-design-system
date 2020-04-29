import classnames from "classnames";
import { useStyles } from "react-treat";

import * as styleRefs from "./Typography.treat";

export interface IUseTextStylesProps {
  baseline: boolean;
  color?: keyof typeof styleRefs.color;
  size?: keyof typeof styleRefs.text;
  weight?: keyof typeof styleRefs.fontWeight;
}

export const useTextStyles = ({
  baseline,
  color = "neutral",
  size = "standard",
  weight = "regular",
}: IUseTextStylesProps) => {
  const styles = useStyles(styleRefs);

  return classnames(
    styles.color[color],
    styles.fontFamily,
    styles.text[size].base,
    styles.fontWeight[weight],
    baseline ? styles.text[size].baseline : null,
    baseline ? styles.text[size].cropFirstLine : null,
  );
};

export type HeadingLevel = keyof typeof styleRefs.heading;
export type HeadingWeight = "regular" | "weak";

interface IUseHeadingStyleProps {
  baseline: boolean;
  color?: keyof typeof styleRefs.color;
  level: HeadingLevel;
  weight?: HeadingWeight;
}

export const useHeadingStyles = ({
  baseline,
  color = "neutral",
  level,
  weight = "regular",
}: IUseHeadingStyleProps) => {
  const styles = useStyles(styleRefs);

  return classnames(
    styles.color[color],
    styles.fontFamily,
    styles.heading[level].base,
    styles.headingWeight[weight],
    baseline ? styles.heading[level].baseline : null,
    baseline ? styles.heading[level].cropFirstLine : null,
  );
};
