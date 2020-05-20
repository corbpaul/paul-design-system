import React from "react";
import { useStyles } from "react-treat";

import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

import * as styleRefs from "./Badge.treat";

const validBadgeTypes = ["critical", "info", "neutral"] as const;

type BadgeType = typeof validBadgeTypes[number];
type BadgeWeight = "regular" | "strong";

export interface BadgeProps {
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
    case "critical":
      return "criticalLight";
    case "info":
      return "infoLight";
  }
};

export const Badge = ({
  children,
  type = "neutral",
  weight = "regular",
}: BadgeProps) => {
  const styles = useStyles(styleRefs);
  return (
    <Box className={styles.outer} display="flex">
      <Box
        background={backgroundForType(type, weight)}
        borderRadius="standard"
        overflow="hidden"
        paddingX="small"
      >
        <Text
          baseline={false}
          color={type}
          component="span"
          size="xsmall"
          textTransform="uppercase"
          weight="medium"
        >
          {children}
        </Text>
      </Box>
    </Box>
  );
};
