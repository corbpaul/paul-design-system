import React, { AllHTMLAttributes } from "react";
import {
  TextLinkRendererProps,
  TextLinkRenderer,
} from "../TextLinkRenderer/TextLinkRenderer";

type AnchorProps = AllHTMLAttributes<HTMLAnchorElement>;
export interface TextLinkProps
  extends Omit<TextLinkRendererProps, "children">,
    Omit<AnchorProps, "className" | "style"> {}

export const TextLink = ({ showVisited, hitArea, ...props }: TextLinkProps) => (
  <TextLinkRenderer showVisited={showVisited} hitArea={hitArea}>
    {(styleProps) => <a {...props} {...styleProps} />}
  </TextLinkRenderer>
);
