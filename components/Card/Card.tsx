import React, { ReactNode } from "react";
import { Box } from "../Box/Box";

export interface ICardProps {
  children?: ReactNode;
}

export const Card = ({ children }: ICardProps) => (
  <Box background="card" paddingX="large" paddingY="xlarge">
    {children}
  </Box>
);
