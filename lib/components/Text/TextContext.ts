import { createContext } from "react";
import { UseTextStylesProps } from "../../hooks/useTypographyStyles/useTypographyStyles";

const textContext = createContext<UseTextStylesProps | false>(false);

export default textContext;
