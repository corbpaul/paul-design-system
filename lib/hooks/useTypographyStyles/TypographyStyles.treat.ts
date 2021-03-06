import { mapValues, omit } from "lodash";
import { style, styleMap } from "treat";
import { Theme } from "treat/theme";
import { TextBreakpoint } from "../../themes/makeTheme";
import { mapToStyleProperty } from "../../utils/utils";
import { basekick } from "./basekick";

export const fontFamily = style(({ typography }) => ({
  fontFamily: typography.fontFamily,
}));

export const fontWeight = styleMap(({ typography }) =>
  mapToStyleProperty(typography.fontWeight, "fontWeight"),
);

interface TextDefinition {
  rows: number;
  size: number;
}

const alignTextToGrid = (
  textDefinition: TextDefinition,
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
  textDefinition: Record<TextBreakpoint, TextDefinition>,
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
    base: utils.responsiveStyle({
      mobile: mobile.base,
      tablet: tablet.base,
    }),
    baseline: utils.responsiveStyle({
      mobile: mobile.baseline,
      tablet: tablet.baseline,
    }),
    cropFirstLine: utils.responsiveStyle({
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
  "1": styleMap((theme) =>
    makeTypographyRules(theme.typography.heading.level["1"], theme),
  ),
  "2": styleMap((theme) =>
    makeTypographyRules(theme.typography.heading.level["2"], theme),
  ),
  "3": styleMap((theme) =>
    makeTypographyRules(theme.typography.heading.level["3"], theme),
  ),
  "4": styleMap((theme) =>
    makeTypographyRules(theme.typography.heading.level["4"], theme),
  ),
};

export const headingWeight = styleMap(({ typography }) =>
  mapValues(typography.heading.weight, (weight) => ({
    fontWeight: typography.fontWeight[weight],
  })),
);

export const color = {
  ...styleMap((theme) =>
    mapToStyleProperty(
      omit(theme.color.foreground, ["neutral", "neutralInverted"]),
      "color",
    ),
  ),
};

export const invertableColor = {
  neutral: styleMap((theme) => ({
    light: {
      color: theme.color.foreground.neutral,
    },
    dark: {
      color: theme.color.foreground.neutralInverted,
    },
  })),
};

const textTransformRules = {
  hidden: "hidden",
  scroll: "scroll",
  visible: "visible",
  auto: "auto",
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
};
export const textTransform = styleMap(
  mapToStyleProperty(textTransformRules, "textTransform"),
);

const makeTouchableSpacing = (touchableHeight: number, textHeight: number) => {
  const space = (touchableHeight - textHeight) / 2;

  return {
    paddingTop: space,
    paddingBottom: space,
  };
};

export const touchable = styleMap(
  ({ grid, typography, touchableSize, utils }) =>
    mapValues(typography.text, (textDefinition) =>
      utils.responsiveStyle({
        mobile: makeTouchableSpacing(
          grid * touchableSize,
          grid * textDefinition.mobile.rows,
        ),
        tablet: makeTouchableSpacing(
          grid * touchableSize,
          grid * textDefinition.tablet.rows,
        ),
      }),
    ),
);

export const truncate = style({
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});
