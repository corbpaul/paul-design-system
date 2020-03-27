import merge from "lodash/merge";
import { DeepPartial } from "utility-types";
import { TreatTokens } from "../makeTheme";

interface IMakeTokensOptions {
  name: string;
  displayName: string;
  brand: string;
  tokenOverrides?: DeepPartial<TreatTokens>;
}

export const makeTokens = ({
  name,
  displayName,
  brand,
  tokenOverrides = {},
}: IMakeTokensOptions): TreatTokens => {
  const tokens: TreatTokens = {
    name,
    displayName,
    color: {
      brand,
    },
    typography: {
      fontFamily: "Arial",
      fontSize: {
        xsmall: 12,
        small: 14,
        standard: 16,
        large: 20,
      },
      fontWeight: {
        regular: 400,
        medium: 600,
        strong: 700,
      },
    },
  };

  return merge(tokens, tokenOverrides);
};
