import React from "react";
import { Text } from "../Text/Text";
import { Stack } from "./Stack";

export default {
  title: "Stack",
  component: Stack,
};

export const StackContent = () => (
  <Stack space="large">
    <h3>Heading</h3>
    <Text>Text</Text>
    <Text>Text</Text>
  </Stack>
);
