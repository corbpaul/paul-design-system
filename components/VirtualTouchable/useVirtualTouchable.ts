import { useStyles } from "react-treat";
import * as styleRefs from "./VirtualTouchable.treat";

export function useVirtualTouchable() {
  return useStyles(styleRefs).virtualTouchable;
}
