import classnames from "classnames";
import React, { CSSProperties, ReactElement, useContext } from "react";
import { useStyles } from "react-treat";
import { useBackground } from "../full/Box/BackgroundContext";
import { useBoxStyles } from "../full/Box/useBoxStyles";
import HeadingContext from "../full/Heading/HeadingContext";
import TextContext from "../Text/TextContext";
import { useTextColor, useTextWeight } from "../Typography/useTypographyStyles";
import { useVirtualTouchable } from "../VirtualTouchable/useVirtualTouchable";
import * as styleRefs from "./TextLinkRenderer.treat";
import TextLinkRendererContext from "./TextLinkRendererContext";

interface IStyleProps {
  style: CSSProperties;
  className: string;
}

export interface ITextLinkRendererProps {
  showVisited?: boolean;
  hitArea?: "standard" | "large";
  children: (styleProps: IStyleProps) => ReactElement;
}

export const TextLinkRenderer = (props: ITextLinkRendererProps) => {
  if (process.env.NODE_ENV !== "production") {
    const inText = useContext(TextContext);
    const inHeading = useContext(HeadingContext);

    if (!inText && !inHeading) {
      throw new Error(
        "TextLink components must be rendered within a Text or Heading component.",
      );
    }
  }

  return <InlineLink {...props} />;
};

function useTextLinkColor() {
  const backgroundContext = useBackground();
  const highlightLink = backgroundContext === "card" || !backgroundContext;
  return highlightLink ? "link" : "neutral";
}

function useTextLinkStyles(color: "link" | "neutral", showVisited: boolean) {
  const styles = useStyles(styleRefs);
  const inHeading = useContext(HeadingContext);
  const mediumWeight = useTextWeight("medium");

  return [
    color === "link" ? styles.underlineOnHoverOnly : styles.underlineAlways,
    useTextColor({ color }),
    !inHeading ? mediumWeight : null,
    showVisited ? styles.visited : null,
  ];
}

function InlineLink({
  showVisited = false,
  hitArea = "standard",
  children,
}: ITextLinkRendererProps) {
  const virtualTouchableStyle = useVirtualTouchable();
  const textLinkColor = useTextLinkColor();

  return (
    <TextLinkRendererContext.Provider value={textLinkColor}>
      {children({
        style: {},
        className: classnames(
          useTextLinkStyles(textLinkColor, showVisited),
          useBoxStyles({
            component: "a",
            cursor: "pointer",
          }),
          hitArea === "large" && virtualTouchableStyle,
        ),
      })}
    </TextLinkRendererContext.Provider>
  );
}
