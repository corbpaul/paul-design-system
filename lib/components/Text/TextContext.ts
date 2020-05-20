import { createContext } from "react";
import { IUseTextStylesProps } from "../Typography/useTypographyStyles";

const textContext = createContext<IUseTextStylesProps | false>(false);

export default textContext;
