import classnames from "classnames";
import { useStyles } from "react-treat";

import * as styleRefs from "./Typography.treat";

type TextColor = keyof typeof styleRefs.color | "neutral";

export const useTextColor = ({ color = "neutral" }: { color: TextColor }) => {
  const styles = useStyles(styleRefs);
  return styles.invertableColor[color].light;
};

export interface IUseTextStylesProps {
  baseline: boolean;
  color?: TextColor;
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
  const textColor = useTextColor({ color });

  return classnames(
    textColor,
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
  level,
  weight = "regular",
}: IUseHeadingStyleProps) => {
  const styles = useStyles(styleRefs);
  const textColor = useTextColor({ color: "neutral" });

  return classnames(
    textColor,
    styles.fontFamily,
    styles.heading[level].base,
    styles.headingWeight[weight],
    baseline ? styles.heading[level].baseline : null,
    baseline ? styles.heading[level].cropFirstLine : null,
  );
};
