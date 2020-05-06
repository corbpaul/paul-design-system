import React from "react";
import { Badge } from "../Badge/Badge";
import { Box } from "../Box/Box";
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
    <Stack space="gutter">
      <Box overflow="hidden" position="relative" image="thumb">
        <Box
          src="https://images.unsplash.com/photo-1588614380684-f694487a18f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1648&q=80"
          component="img"
          position="absolute"
          top={0}
          left={0}
          width="full"
          height="full"
          objectFit="cover"
        />
      </Box>
      <Badge type="info">Showbiz</Badge>
      <Heading level={3}>
        Emily Blunt: "It's about human beings and how they're affected by a
        crisis"
      </Heading>
      <Text color="secondary">
        Now postponed because of coronavirus, A Quiet Place 2 explores a world
        untethered by fear. It's star discusses parenthood, in film and real
        life, and her terror of doing SNL.
      </Text>
      <Text color={"secondary"} size="small">
        by Emily Blunt
      </Text>
    </Stack>
  </Card>
);
