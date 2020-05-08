import React from "react";
import { Box } from "../full/Box/Box";

export interface IImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: IImageProps) => (
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
