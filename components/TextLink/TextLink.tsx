import React, { AllHTMLAttributes } from "react";
import {
  ITextLinkRendererProps,
  TextLinkRenderer,
} from "../TextLinkRenderer/TextLinkRenderer";

type AnchorProps = AllHTMLAttributes<HTMLAnchorElement>;
export interface ITextLinkProps
  extends Omit<ITextLinkRendererProps, "children">,
    Omit<AnchorProps, "className" | "style"> {}

export const TextLink = ({
  showVisited,
  hitArea,
  ...props
}: ITextLinkProps) => (
  <TextLinkRenderer showVisited={showVisited} hitArea={hitArea}>
    {(styleProps) => <a {...props} {...styleProps} />}
  </TextLinkRenderer>
);
