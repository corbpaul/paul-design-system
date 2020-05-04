import React, { useEffect, useState } from "react";
import memoize from "memoizerific";
import { useParameter } from "@storybook/api";
import {
  Icons,
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from "@storybook/components";
import { styled } from "@storybook/theming";

import { EVENTS, PARAM_KEY } from "../constants";
import { ColorIcon } from "./ColorIcon";

const IconButtonWithLabel = styled(IconButton)(() => ({
  display: "inline-flex",
  alignItems: "center",
}));

const IconButtonLabel = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
  marginLeft: 10,
}));

const createThemeSelectorItem = memoize(1000)((item) => ({
  id: item.id || item.displayName,
  title: item.displayName,
  onClick: () => {
    change({
      selected: item,
      displayName: item.displayName,
      webFotns: item.webFonts,
      bg: item.background,
    });
  },
  right: <ColorIcon background={item.brand} />,
}));

const getDisplayedItems = memoize(10)((list, change) => {
  let availableThemeSelectorItems = [];

  if (list.length) {
    availableThemeSelectorItems = [
      ...list.map((item) => createThemeSelectorItem(item)),
    ];
  }

  return availableThemeSelectorItems;
});

export const Tool = ({ channel }) => {
  const { themes } = useParameter(PARAM_KEY, {});
  const [selectedTheme, setSelectedTheme] = useState();

  useEffect(() => {
    if (themes) {
      setSelectedTheme(themes[Object.keys(themes)[0]].displayName);
    }
  }, [themes]);

  function change({ selected, displayName, webFonts, bg }) {
    channel.emit(EVENTS.CHANGE, selected, webFonts, bg);
    setSelectedTheme(displayName);
  }

  const itemList = themes ? Object.values(themes) : [];

  return itemList.length ? (
    <>
      <WithTooltip
        placement="top"
        trigger="click"
        tooltip={({ onHide }) => (
          <TooltipLinkList
            links={getDisplayedItems(itemList, (i) => {
              change(i);
              onHide();
            })}
          />
        )}
        closeOnClick
      >
        <IconButtonWithLabel
          key="theme"
          active={selectedTheme}
          title="Change the theme of the preview"
        >
          <Icons icon="paintbrush" />
          {selectedTheme && <IconButtonLabel>{selectedTheme}</IconButtonLabel>}
        </IconButtonWithLabel>
      </WithTooltip>
    </>
  ) : null;
};
