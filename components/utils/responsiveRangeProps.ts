import { breakpoints, ITreatTokens } from "../../themes/makeTheme";
type Breakpoint = keyof ITreatTokens["breakpoint"];

export interface IResponsiveRangeProps {
  above?: Exclude<Breakpoint, "desktop">;
  below?: Exclude<Breakpoint, "mobile">;
}

export const resolveResponsiveRangeProps = (
  props: IResponsiveRangeProps,
): [boolean, boolean, boolean] => {
  const { above, below } = props;

  if (!above && !below) {
    return [false, false, false];
  }

  const startIndex = above ? breakpoints.indexOf(above) + 1 : 0;
  const endIndex = below
    ? breakpoints.indexOf(below) - 1
    : breakpoints.length - 1;
  const range = breakpoints.slice(startIndex, endIndex + 1);

  const includeMobile = range.indexOf("mobile") >= 0;
  const includeTablet = range.indexOf("tablet") >= 0;
  const includeDesktop = range.indexOf("desktop") >= 0;

  return [includeMobile, includeTablet, includeDesktop];
};
