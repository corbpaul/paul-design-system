import React from "react";
import { addons, types } from "@storybook/addons";

import { ADDON_ID } from "./constants";
import { Tool } from "./components/Tool";

addons.register(ADDON_ID, () => {
  const channel = addons.getChannel();

  addons.add(ADDON_ID, {
    title: "Themes",
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === "story",
    render: () => <Tool channel={channel} />
  });
});
