import classnames from "classnames";
import { useStyles } from "react-treat";

import {
  resolveResponsiveProp,
  ResponsiveProp,
} from "../../utils/responsiveProp";

import * as styleRefs from "./NegativeMarginTop.treat";

type NegativeMarginTop = Extract<
  Extract<keyof typeof styleRefs.mobile, keyof typeof styleRefs.tablet>,
  Extract<keyof typeof styleRefs.mobile, keyof typeof styleRefs.desktop>
>;

export const useNegativeMarginTop = (
  space: ResponsiveProp<NegativeMarginTop>,
) => {
  const styles = useStyles(styleRefs);
  const negativeMarginTop = resolveResponsiveProp(
    space,
    styles.mobile,
    styles.tablet,
    styles.desktop,
  );
  return classnames(styles.base, negativeMarginTop);
};
