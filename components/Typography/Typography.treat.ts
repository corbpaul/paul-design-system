import { mapValues } from "lodash";
import { style, styleMap } from "treat";
import { Theme } from "treat/theme";
import { TextBreakpoint } from "../../themes/makeTheme";
import { mapToStyleProperty } from "../../utils/utils";
import { basekick } from "./basekick";

export const color = {
  ...styleMap((theme) => mapToStyleProperty(theme.color.foreground, "color")),
};

export const fontFamily = style(({ typography }) => ({
  fontFamily: typography.fontFamily,
}));

export const fontWeight = styleMap(({ typography }) =>
  mapToStyleProperty(typography.fontWeight, "fontWeight"),
);

interface ITextDefinition {
  rows: number;
  size: number;
}

const alignTextToGrid = (
  textDefinition: ITextDefinition,
  gridRowHeight: number,
  descenderHeightScale: number,
  capHeight: number,
) =>
  basekick({
    baseFontSize: 1,
    typeSizeModifier: textDefinition.size,
    typeRowSpan: textDefinition.rows,
    gridRowHeight,
    descenderHeightScale,
    capHeight,
  });

const makeTypographyRules = (
  textDefinition: Record<TextBreakpoint, ITextDefinition>,
  { grid, typography, utils }: Theme,
) => {
  const mobile = alignTextToGrid(
    textDefinition.mobile,
    grid,
    typography.descenderHeightScale,
    typography.capHeightScale,
  );

  const tablet = alignTextToGrid(
    textDefinition.tablet,
    grid,
    typography.descenderHeightScale,
    typography.capHeightScale,
  );

  return {
    base: utils.resposiveStyle({
      mobile: mobile.base,
      tablet: tablet.base,
    }),
    baseline: utils.resposiveStyle({
      mobile: mobile.baseline,
      tablet: tablet.baseline,
    }),
    cropFirstLine: utils.resposiveStyle({
      mobile: mobile.cropFirstLine,
      tablet: tablet.cropFirstLine,
    }),
  };
};

export const text = {
  xsmall: styleMap((theme) =>
    makeTypographyRules(theme.typography.text.xsmall, theme),
  ),
  small: styleMap((theme) =>
    makeTypographyRules(theme.typography.text.small, theme),
  ),
  standard: styleMap((theme) =>
    makeTypographyRules(theme.typography.text.standard, theme),
  ),
  large: styleMap((theme) =>
    makeTypographyRules(theme.typography.text.large, theme),
  ),
};

export const heading = {
  1: styleMap((theme) =>
    makeTypographyRules(theme.typography.heading.level["1"], theme),
  ),
  2: styleMap((theme) =>
    makeTypographyRules(theme.typography.heading.level["2"], theme),
  ),
  3: styleMap((theme) =>
    makeTypographyRules(theme.typography.heading.level["3"], theme),
  ),
  4: styleMap((theme) =>
    makeTypographyRules(theme.typography.heading.level["4"], theme),
  ),
};

export const headingWeight = styleMap(({ typography }) =>
  mapValues(typography.heading.weight, (weight) => ({
    fontWeight: typography.fontWeight[weight],
  })),
);