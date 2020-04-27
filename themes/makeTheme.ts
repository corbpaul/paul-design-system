import { values } from "lodash";
import { createTheme } from "treat";
import { makeThemeUtils } from "./themeUtils";

export const breakpoints = ["mobile", "tablet", "desktop"] as const;
type Breakpoint = typeof breakpoints[number];

export type TextBreakpoint = Exclude<Breakpoint, "desktop">;
type TextDefinition = Record<
  TextBreakpoint,
  {
    size: number;
    rows: number;
  }
>;

type FontSize = "xsmall" | "small" | "standard" | "large";
type FontWeight = "regular" | "medium" | "strong";
type LineHeight = "xsmall" | "small" | "standard" | "large";

export interface ITreatTokens {
  name: string;
  displayName: string;
  breakpoint: Record<Breakpoint, number>;
  color: {
    brand: string;
    background: {
      body: string;
      card: string;
      neutral: string;
    };
    foreground: {
      neutral: string;
    };
  };
  grid: number;
  space: {
    small: number;
    standard: number;
    large: number;
    xlarge: number;
  };
  typography: {
    capHeightScale: number;
    descenderHeightScale: number;
    fontFamily: string;
    fontWeight: Record<FontWeight, number>;
    heading: {
      level: {
        "1": TextDefinition;
        "2": TextDefinition;
        "3": TextDefinition;
        "4": TextDefinition;
      };
      weight: {
        weak: FontWeight;
        regular: FontWeight;
      };
    };
    text: {
      xsmall: TextDefinition;
      small: TextDefinition;
      standard: TextDefinition;
      large: TextDefinition;
    };
    webFont: string | null;
  };
}

const makeRuntimeTokens = (tokens: TreatTheme) => ({
  name: tokens.name,
  displayName: tokens.displayName,
  background: tokens.color.background.body,
  color: tokens.color,
  webFonts: makeWebFonts(tokens),
});

const makeWebFonts = (tokens: TreatTheme) => {
  const font = tokens.typography.webFont;

  if (!font) {
    return [];
  }

  const weights = values(tokens.typography.fontWeight);
  return [{ font, weights }];
};

const decorateTokens = (treatTokens: ITreatTokens) => {
  const { color, ...restTokens } = treatTokens;

  const decoratedTokens = {
    color: {
      ...color,
    },
    ...restTokens,
  };

  return {
    ...decoratedTokens,
    utils: makeThemeUtils(decoratedTokens),
  };
};

export function makeTheme(treatTokens: ITreatTokens) {
  const decoratedTokens = decorateTokens(treatTokens);

  return {
    treatTheme: createTheme(decoratedTokens),
    ...makeRuntimeTokens(decoratedTokens),
  };
}

export type TreatTheme = ReturnType<typeof decorateTokens>;
