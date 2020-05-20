import React from "react";
import { Box } from "../Box/Box";

export interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps) => (
  <Box overflow="hidden" position="relative" image="thumb">
    <Box
      src={src}
      alt={alt}
      component="img"
      position="absolute"
      top={0}
      left={0}
      width="full"
      height="full"
      objectFit="cover"
    />
  </Box>
);
