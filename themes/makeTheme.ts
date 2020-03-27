import { createTheme } from "treat";

type FontSize = "xsmall" | "small" | "standard" | "large";
type FontWeight = "regular" | "medium" | "strong";

export interface TreatTokens {
  name: string;
  displayName: string;
  color: {
    brand: string;
  };
  typography: {
    fontFamily: string;
    fontSize: Record<FontSize, number>;
    fontWeight: Record<FontWeight, number>;
  };
}

const makeRuntimeTokens = (tokens: TreatTheme) => ({
  name: tokens.name,
  displayName: tokens.displayName,
  color: tokens.color
});

const decorateTokens = (treatTokens: TreatTokens) => {
  const { color, ...restTokens } = treatTokens;

  const decoratedTokens = {
    color: {
      ...color
    },
    ...restTokens
  };

  return {
    ...decoratedTokens
  };
};

export function makeTheme(treatTokens: TreatTokens) {
  const decoratedTokens = decorateTokens(treatTokens);

  return {
    treatTheme: createTheme(decoratedTokens),
    ...makeRuntimeTokens(decoratedTokens)
  };
}

export type TreatTheme = ReturnType<typeof decorateTokens>;
