import { style } from "treat";

export const underlineAlways = style({
  textDecoration: "underline",
  textUnderlinePosition: "under",
});

export const underlineOnHoverOnly = style({
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});

export const colorOnHover = style((theme) => ({
  ":hover": {
    color: theme.color.foreground.link,
  },
}));

export const visited = style((theme) => ({
  ":visited": {
    color: theme.color.foreground.linkVisited,
  },
}));

export const button = style({
  outline: "none",
});

export const focusOverlay = style({
  selectors: {
    [`${button}:focus ~ &`]: {
      opacity: 1,
    },
  },
});
