import React from "react";
import { Box } from "../Box/Box";
import { Heading } from "../full/Heading/Heading";
import { Image } from "../Image/Image";
import { Stack } from "../Stack/Stack";
import { Text } from "../Text/Text";
import { TextLink } from "../TextLink/TextLink";
import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
};

export const CardContent = () => (
  <Card>
    <Stack space="gutter">
      <Image
        src="https://images.unsplash.com/photo-1510486102594-9551be1c76d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Emily Blunt"
      />
      <Text size="small" textTransform="uppercase">
        <TextLink href="http://google.com">Showbiz</TextLink>
      </Text>
      <Heading level="3">
        Emily Blunt: "It's about human beings and how they're affected by a
        crisis"
      </Heading>
      <Text color="secondary" size="small">
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
