import { isEqual, omit } from "lodash";
import { Style } from "treat";
import { ITreatTokens } from "./makeTheme";

type RequiredTokens = Pick<ITreatTokens, "breakpoint">;
type StyleWithoutMediaQueries = Exclude<Style["@media"], undefined>[string];

interface IResponsiveStyle {
  mobile?: StyleWithoutMediaQueries;
  tablet?: StyleWithoutMediaQueries;
  desktop?: StyleWithoutMediaQueries;
}

export const makeThemeUtils = (tokens: RequiredTokens) => {
  const makeMediaQuery = (breakpoint: keyof RequiredTokens["breakpoint"]) => (
    styles: StyleWithoutMediaQueries,
  ) =>
    !styles || Object.keys(styles).length === 0
      ? {}
      : {
          [`screen and (min-width: ${tokens.breakpoint[breakpoint]}px)`]: styles,
        };

  const mediaQuery = {
    tablet: makeMediaQuery("tablet"),
    desktop: makeMediaQuery("desktop"),
  };

  const responsiveStyle = ({
    mobile,
    tablet,
    desktop,
  }: IResponsiveStyle): Style => {
    const mobileStyles = omit(mobile, "@media");

    const tabletStyles =
      !tablet || isEqual(tablet, mobileStyles) ? null : tablet;

    const stylesBelowDesktop = mobileStyles || tabletStyles;
    const desktopStyles =
      !desktop || isEqual(desktop, stylesBelowDesktop) ? null : desktop;

    const hasMediaQueries = tabletStyles || desktopStyles;

    return {
      ...mobileStyles,
      ...(hasMediaQueries
        ? {
            "@media": {
              ...(tabletStyles ? mediaQuery.tablet(tabletStyles) : {}),
              ...(desktopStyles ? mediaQuery.desktop(desktopStyles) : {}),
            },
          }
        : {}),
    };
  };

  return { responsiveStyle };
};
