import classnames from "classnames";
import React, { CSSProperties, ReactElement, useContext } from "react";
import { useStyles } from "react-treat";
import { useBackground } from "../Box/BackgroundContext";
import { useBoxStyles } from "../Box/useBoxStyles";
import HeadingContext from "../Heading/HeadingContext";
import TextContext from "../Text/TextContext";
import {
  useTextColor,
  useTextWeight,
} from "../../hooks/useTypographyStyles/useTypographyStyles";
import { useVirtualTouchable } from "../VirtualTouchable/useVirtualTouchable";
import * as styleRefs from "./TextLinkRenderer.treat";
import TextLinkRendererContext from "./TextLinkRendererContext";

interface StyleProps {
  style: CSSProperties;
  className: string;
}

export interface TextLinkRendererProps {
  showVisited?: boolean;
  hitArea?: "standard" | "large";
  children: (styleProps: StyleProps) => ReactElement;
}

export const TextLinkRenderer = (props: TextLinkRendererProps) => {
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
  const inHeading = useContext(HeadingContext);
  const highlightLink =
    (backgroundContext === "card" && !inHeading) ||
    (!backgroundContext && !inHeading);
  return highlightLink ? "link" : "neutral";
}

function useTextLinkStyles(color: "link" | "neutral", showVisited: boolean) {
  const styles = useStyles(styleRefs);
  const inHeading = useContext(HeadingContext);
  const mediumWeight = useTextWeight("medium");

  return [
    inHeading
      ? styles.colorOnHover
      : color === "link"
      ? styles.underlineOnHoverOnly
      : styles.underlineAlways,
    useTextColor({ color }),
    !inHeading ? mediumWeight : null,
    showVisited ? styles.visited : null,
  ];
}

function InlineLink({
  showVisited = false,
  hitArea = "standard",
  children,
}: TextLinkRendererProps) {
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
