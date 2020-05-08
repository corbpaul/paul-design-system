import classnames from "classnames";
import { useContext } from "react";
import { useStyles } from "react-treat";

import {
  useBackground,
  useBackgroundLightness,
} from "../Box/BackgroundContext";
import { IUseBoxStylesProps } from "../Box/useBoxStyles";
import TextLinkRendererContext from "../TextLinkRenderer/TextLinkRendererContext";

import * as styleRefs from "./Typography.treat";

type TextColor = keyof typeof styleRefs.color | "neutral";

export const useTextColor = ({
  color = "neutral",
  backgroundContext: backgroundContextOverride,
}: {
  color: TextColor;
  backgroundContext?: IUseBoxStylesProps["background"];
}) => {
  const styles = useStyles(styleRefs);
  const backgroundContext = useBackground();
  const background = backgroundContextOverride || backgroundContext;
  const backgroundLightness = useBackgroundLightness(background);

  if (color !== "neutral") {
    return color in styles.invertableColor
      ? styles.invertableColor[color as keyof typeof styles.invertableColor][
          backgroundLightness
        ]
      : styles.color[color];
  }

  return styles.invertableColor.neutral[backgroundLightness];
};

export function useTextWeight(weight: keyof typeof styleRefs.fontWeight) {
  const styles = useStyles(styleRefs);
  const inTextLinkRenderer = useContext(TextLinkRendererContext);

  return inTextLinkRenderer ? undefined : styles.fontWeight[weight];
}

export interface IUseTextStylesProps {
  backgroundContext?: IUseBoxStylesProps["background"];
  baseline: boolean;
  color?: TextColor;
  size?: keyof typeof styleRefs.text;
  textTransform?: keyof typeof styleRefs.textTransform;
  weight?: keyof typeof styleRefs.fontWeight;
}

export const useTextStyles = ({
  backgroundContext,
  baseline,
  color = "neutral",
  size = "standard",
  textTransform,
  weight = "regular",
}: IUseTextStylesProps) => {
  const styles = useStyles(styleRefs);
  const textColor = useTextColor({ color, backgroundContext });

  return classnames(
    textColor,
    styles.fontFamily,
    styles.text[size].base,
    styles.fontWeight[weight],
    baseline ? styles.text[size].baseline : null,
    baseline ? styles.text[size].cropFirstLine : null,
    textTransform ? styles.textTransform[textTransform] : null,
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

export function useTouchableSpace(size: keyof typeof styleRefs.touchable) {
  return useStyles(styleRefs).touchable[size];
}

export function useTruncate() {
  return useStyles(styleRefs).truncate;
}
