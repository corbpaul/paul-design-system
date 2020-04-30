import { merge } from "lodash";
import { DeepPartial } from "utility-types";
import { ITreatTokens } from "../makeTheme";

interface IMakeTokensOptions {
  name: string;
  displayName: string;
  brand: string;
  tokenOverrides?: DeepPartial<ITreatTokens>;
}

export const makeTokens = ({
  name,
  displayName,
  brand,
  tokenOverrides = {},
}: IMakeTokensOptions): ITreatTokens => {
  const black = "#1c1c1c";
  const neutral = "#747474";
  const white = "#fff";

  const tokens: ITreatTokens = {
    name,
    displayName,
    breakpoint: {
      mobile: 0,
      tablet: 740,
      desktop: 992,
    },
    color: {
      brand,
      background: {
        body: "#eee",
        card: white,
        neutral,
      },
      foreground: {
        neutral: black,
        neutralInverted: white,
      },
    },
    grid: 4,
    space: {
      small: 2,
      medium: 4,
      large: 6,
      xlarge: 8,
    },
    typography: {
      capHeightScale: 0.6,
      descenderHeightScale: 0.165,
      fontFamily:
        "Roboto,Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif",
      fontWeight: {
        regular: 400,
        medium: 500,
        strong: 700,
      },
      heading: {
        level: {
          1: {
            mobile: {
              size: 28,
              rows: 9,
            },
            tablet: {
              size: 42,
              rows: 11,
            },
          },
          2: {
            mobile: {
              size: 21,
              rows: 8,
            },
            tablet: {
              size: 28,
              rows: 9,
            },
          },
          3: {
            mobile: {
              size: 21,
              rows: 7,
            },
            tablet: {
              size: 21,
              rows: 7,
            },
          },
          4: {
            mobile: {
              size: 18,
              rows: 7,
            },
            tablet: {
              size: 18,
              rows: 7,
            },
          },
        },
        weight: {
          weak: "regular",
          regular: "medium",
        },
      },
      text: {
        xsmall: {
          mobile: {
            size: 12,
            rows: 5,
          },
          tablet: {
            size: 12,
            rows: 5,
          },
        },
        small: {
          mobile: {
            size: 14,
            rows: 5,
          },
          tablet: {
            size: 14,
            rows: 5,
          },
        },
        standard: {
          mobile: {
            size: 16,
            rows: 6,
          },
          tablet: {
            size: 16,
            rows: 6,
          },
        },
        large: {
          mobile: {
            size: 18,
            rows: 7,
          },
          tablet: {
            size: 18,
            rows: 7,
          },
        },
      },
      webFont: "Roboto",
    },
  };

  return merge(tokens, tokenOverrides);
};
