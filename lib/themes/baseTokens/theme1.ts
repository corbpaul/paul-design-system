import { merge } from "lodash";
import { rgba } from "polished";
import { DeepPartial } from "utility-types";
import { TreatTokens } from "../makeTheme";

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
  tokenOverrides = {},
}: MakeTokensOptions): TreatTokens => {
  const black = "#0a1633";
  const critical = "#ff4e36";
  const focus = rgba("#1e90ff", 0.7);
  const info = "#1e468c";
  const link = "#2765cf";
  const linkVisited = "#733d90";
  const neutral = "#747474";
  const secondary = "#707070";
  const white = "#fff";

  const tokens: TreatTokens = {
    name,
    displayName,
    breakpoint: {
      mobile: 0,
      tablet: 740,
      desktop: 992,
    },
    border: {
      color: {
        standard: "#d6d6d6",
        critical,
        focus,
        info,
      },
      radius: {
        standard: 2,
      },
      width: {
        standard: 1,
        large: 2,
      },
    },
    color: {
      brand,
      background: {
        body: white,
        card: white,
        critical,
        info,
        neutral,
      },
      foreground: {
        critical,
        info,
        link,
        linkVisited,
        neutral: black,
        neutralInverted: white,
        secondary,
      },
    },
    grid: 4,
    image: {
      thumb: 66.67,
    },
    shadows: {
      small:
        "0 2px 4px 0px rgba(28,28,28,.1), 0 2px 2px -2px rgba(28,28,28,.1), 0 4px 4px -4px rgba(28,28,28,.2)",
      medium:
        "0 2px 4px 0px rgba(28,28,28,.1), 0 8px 8px -4px rgba(28,28,28,.1), 0 12px 12px -8px rgba(28,28,28,.2)",
      large:
        "0 2px 4px 0px rgba(28,28,28,.1), 0 12px 12px -4px rgba(28,28,28,.1), 0 20px 20px -12px rgba(28,28,28,.2)",
    },
    space: {
      gutter: 6,
      xxsmall: 1,
      xsmall: 2,
      small: 3,
      medium: 5,
      large: 8,
      xlarge: 12,
      xxlarge: 24,
    },
    touchableSize: 12,
    transforms: {
      touchable: "scale(0.95)",
    },
    transitions: {
      fast: "transform .125s ease, opacity .125s ease",
      touchable: "transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)",
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
          "1": {
            mobile: {
              size: 28,
              rows: 9,
            },
            tablet: {
              size: 42,
              rows: 11,
            },
          },
          "2": {
            mobile: {
              size: 21,
              rows: 8,
            },
            tablet: {
              size: 28,
              rows: 9,
            },
          },
          "3": {
            mobile: {
              size: 21,
              rows: 7,
            },
            tablet: {
              size: 21,
              rows: 7,
            },
          },
          "4": {
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
