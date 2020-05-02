import React from "react";
import { useStyles } from "react-treat";

import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

import * as styleRefs from "./Badge.treat";

const validBadgeTypes = ["neutral"] as const;

type BadgeType = typeof validBadgeTypes[number];
type BadgeWeight = "regular" | "strong";

export interface IBadgeProps {
  children: string;
  type?: BadgeType;
  weight?: BadgeWeight;
}

const backgroundForType = (type: BadgeType, weight: BadgeWeight) => {
  if (weight === "strong") {
    return type;
  }

  switch (type) {
    case "neutral":
    default:
      return "neutralLight";
  }
};

export const Badge = ({
  children,
  type = "neutral",
  weight = "regular",
}: IBadgeProps) => {
  const styles = useStyles(styleRefs);
  return (
    <Box className={styles.outer} display="flex">
      <Box
        background={backgroundForType(type, weight)}
        borderRadius="standard"
        overflow="hidden"
        paddingX="small"
      >
        <Text baseline={false} component="span" size="xsmall" weight="medium">
          {children}
        </Text>
      </Box>
    </Box>
  );
};
