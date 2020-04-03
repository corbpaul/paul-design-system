import { values } from "lodash";
import { createTheme } from "treat";

type FontSize = "xsmall" | "small" | "standard" | "large";
type FontWeight = "regular" | "medium" | "strong";

export interface ITreatTokens {
  name: string;
  displayName: string;
  color: {
    brand: string;
  };
  space: {
    small: number;
    standard: number;
    large: number;
  };
  typography: {
    fontFamily: string;
    fontSize: Record<FontSize, number>;
    fontWeight: Record<FontWeight, number>;
    webFont: string | null;
  };
}

const makeRuntimeTokens = (tokens: TreatTheme) => ({
  name: tokens.name,
  displayName: tokens.displayName,
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
