// import React, { Children, ReactNode } from "react";
// import { useStyles } from "react-treat";
// import { Box } from "../Box/Box";
// import { IUseBoxStylesProps, useBoxStyles } from "../Box/useBoxStyles";

// import * as styleRefs from "./Stack.treat";

// const validStackComponents = ["div", "ol", "ul"] as const;

// export interface IStackProps {
//   component?: typeof validStackComponents[number];
//   children: ReactNode;
//   space: IUseBoxStylesProps["padding"];
// }

// export interface IUseStackProps {
//   component: IUseBoxStylesProps["component"];
//   space: IUseBoxStylesProps["paddingBottom"];
// }

// export const useStackItem = ({ component, space }: IUseStackProps) => {
//   const styles = useStyles(styleRefs);

//   return useBoxStyles({
//     className: styles.excludingLast,
//     component,
//     paddingBottom: space,
//   });
// };

// export const Stack = ({ component = "div", children, space }: IStackProps) => {
//   const stackClasses = useStackItem({ component, space });
//   const stackItems = Children.toArray(children);

//   const isList = component === "ol" || component === "ul";
//   const stackItemComponent = isList ? "li" : "div";

//   return (
//     <Box component={component}>
//       {stackItems.map((child, index) => (
//         <Box
//           className={stackClasses}
//           component={stackItemComponent}
//           key={index}
//         >
//           {child}
//         </Box>
//       ))}
//     </Box>
//   );
// };

import React, { Children, ReactNode } from "react";
import { useStyles } from "react-treat";
import { Box } from "../Box/Box";
import { IUseBoxStylesProps, useBoxStyles } from "../Box/useBoxStyles";
import * as styleRefs from "./Stack.treat";

export interface IUseStackProps {
  component: IUseBoxStylesProps["component"];
  space: IUseBoxStylesProps["paddingBottom"];
}

export const useStackItem = ({ component, space }: IUseStackProps) => {
  const styles = useStyles(styleRefs);

  return useBoxStyles({
    component,
    className: styles.excludingLast,
    paddingBottom: space,
  });
};

const validStackComponents = ["div", "ol", "ul"] as const;

export interface IStackProps {
  component?: typeof validStackComponents[number];
  children: ReactNode;
  space: IUseBoxStylesProps["padding"];
}

export const Stack = ({
  component = "div",
  children,
  space,
}: IStackProps) => {
  if (
    process.env.NODE_ENV === "development" &&
    !validStackComponents.includes(component)
  ) {
    throw new Error(`Invalid Stack component: ${component}`);
  }

  const stackClasses = useStackItem({ component, space });
  const stackItems = Children.toArray(children);

  const isList = component === "ol" || component === "ul";
  const stackItemComponent = isList ? "li" : "div";

  return (
    <Box component={component}>
      {Children.map(stackItems, (child, index) => (
        <Box
          component={stackItemComponent}
          className={stackClasses}
        >
          {child}
        </Box>
      ))}
    </Box>
  );
};
