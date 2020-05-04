import React from "react";
import { Badge } from "../Badge/Badge";
import { Heading } from "../Heading/Heading";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";
import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
};

export const CardContent = () => (
  <Card>
    <Stack space="large">
      <Badge type="neutral">EMILY BLUNT</Badge>
      <Heading level={3}>
        Emily Blunt: "It's about human beings and how they're affected by a
        crisis"
      </Heading>
      <Text>
        Now postponed because of coronavirus, A Quiet Place 2 explores a world
        untethered by fear. It's star discusses parenthood, in film and real
        life, and her terror of doing SNL.
      </Text>
    </Stack>
  </Card>
);
