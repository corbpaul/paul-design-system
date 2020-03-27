import classnames from "classnames";
import { useStyles } from "react-treat";

import * as styleRefs from "./Text.treat";

export interface UseTextProps {
  size?: keyof typeof styleRefs.fontSize;
  weight?: keyof typeof styleRefs.fontWeight;
}

export const useTextStyles = ({
  size = "standard",
  weight = "regular"
}: UseTextProps) => {
  const styles = useStyles(styleRefs);

  return classnames(
    // styles.color,
    styles.fontFamily,
    styles.fontSize[size],
    styles.fontWeight[weight]
  );
};
