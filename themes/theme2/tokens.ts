import { makeTokens } from "../baseTokens/theme1";

export default makeTokens({
  name: "theme2",
  displayName: "Theme 2",
  brand: "#005aeb",
  tokenOverrides: {
    typography: {
      fontFamily: "'Lato', sans-serif",
      webFont: "Lato",
    },
  },
});
