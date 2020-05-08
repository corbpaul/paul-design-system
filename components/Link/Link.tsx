import React from "react";
import { useBoxStyles } from "../Box/useBoxStyles";
import {
  ILinkComponentProps,
  useLinkComponent,
} from "../ThemeProvider/ThemeProvider";

export type LinkProps = ILinkComponentProps;

export const Link = ({ href, className, ...restProps }: ILinkComponentProps) => {
  const LinkComponent = useLinkComponent();

  return (
    <LinkComponent
      href={href}
      className={useBoxStyles({ component: "a", className })}
      {...restProps}
    />
  );
};
