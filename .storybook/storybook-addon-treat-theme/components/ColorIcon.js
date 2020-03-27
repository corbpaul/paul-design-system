import { styled } from "@storybook/theming";

export const ColorIcon = styled.span(
  ({ background }) => ({
    display: "block",
    width: "1rem",
    height: "1rem",
    borderRadius: "1rem",
    background
  }),
  ({ theme }) => ({
    boxShadow: `${theme.appBorderColor} 0 0 0 1px insert`
  })
);
