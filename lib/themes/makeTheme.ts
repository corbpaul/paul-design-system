import { mapValues, values } from "lodash";
import { createTheme } from "treat";
import { getLightVariant, isLight } from "../utils/light";
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

type FontWeight = "regular" | "medium" | "strong";

export interface TreatTokens {
  name: string;
  displayName: string;
  breakpoint: Record<Breakpoint, number>;
  border: {
    color: {
      standard: string;
      critical: string;
      focus: string;
      info: string;
    };
    radius: {
      standard: number;
    };
    width: {
      standard: number;
      large: number;
    };
  };
  color: {
    brand: string;
    background: {
      body: string;
      card: string;
      critical: string;
      info: string;
      neutral: string;
    };
    foreground: {
      critical: string;
      info: string;
      link: string;
      linkVisited: string;
      neutral: string;
      neutralInverted: string;
      secondary: string;
    };
  };
  grid: number;
  image: {
    thumb: number;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  space: {
    gutter: number;
    xxsmall: number;
    xsmall: number;
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
  };
  touchableSize: number;
  transforms: {
    touchable: string;
  };
  transitions: {
    fast: string;
    touchable: string;
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

const makeWebFonts = (tokens: TreatTheme) => {
  const font = tokens.typography.webFont;

  if (!font) {
    return [];
  }

  const weights = values(tokens.typography.fontWeight);
  return [{ font, weights }];
};

const makeRuntimeTokens = (tokens: TreatTheme) => ({
  name: tokens.name,
  backgroundLightness: mapValues(tokens.color.background, (background) => {
    if (!background) {
      throw new Error(
        `Error resolving background lightness for background ${background} in ${tokens.name} theme}`,
      );
    }

    return isLight(background) ? "light" : "dark";
  }),
  displayName: tokens.displayName,
  background: tokens.color.background.body,
  color: tokens.color,
  webFonts: makeWebFonts(tokens),
});

const decorateTokens = (treatTokens: TreatTokens) => {
  const { color, ...restTokens } = treatTokens;

  const decoratedTokens = {
    color: {
      ...color,
      background: {
        ...color.background,
        criticalLight: getLightVariant(color.background.critical),
        infoLight: getLightVariant(color.background.info),
        neutralLight: getLightVariant(color.background.neutral),
      },
    },
    ...restTokens,
  };

  return {
    ...decoratedTokens,
    utils: makeThemeUtils(decoratedTokens),
  };
};

export function makeTheme(treatTokens: TreatTokens) {
  const decoratedTokens = decorateTokens(treatTokens);

  return {
    treatTheme: createTheme(decoratedTokens),
    ...makeRuntimeTokens(decoratedTokens),
  };
}

export type TreatTheme = ReturnType<typeof decorateTokens>;
export type Theme = ReturnType<typeof makeTheme>;
