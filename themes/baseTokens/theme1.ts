import { TreatTokens } from "../makeTheme";
import { DeepPartial } from "utility-types";
import merge from "lodash/merge";

interface MakeTokensOptions {
  name: string;
  displayName: string;
  brand: string;
  tokenOverrides?: DeepPartial<TreatTokens>;
}

export const makeTokens = ({
  name,
  displayName,
  brand,
  tokenOverrides = {}
}: MakeTokensOptions): TreatTokens => {
  const tokens: TreatTokens = {
    name,
    displayName,
    color: {
      brand
    },
    typography: {
      fontFamily: "Arial",
      fontSize: {
        xsmall: 12,
        small: 14,
        standard: 16,
        large: 20
      },
      fontWeight: {
        regular: 400,
        medium: 600,
        strong: 700
      }
    }
  };

  return merge(tokens, tokenOverrides);
};
