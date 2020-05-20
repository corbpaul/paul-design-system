import React from "react";
import { useBoxStyles } from "../Box/useBoxStyles";
import {
  LinkComponentProps,
  useLinkComponent,
} from "../ThemeProvider/ThemeProvider";

export type LinkProps = LinkComponentProps;

export const Link = ({ href, className, ...restProps }: LinkComponentProps) => {
  const LinkComponent = useLinkComponent();

  return (
    <LinkComponent
      href={href}
      className={useBoxStyles({ component: "a", className })}
      {...restProps}
    />
  );
};
