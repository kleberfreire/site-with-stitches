import { createStitches } from "@stitches/react";

export const { getCssText, theme, createTheme } = createStitches({
  theme: {
    colors: {
      primary: "#FFD400",
      secondary: "#020202",
      tertiary: "#FFFFFF",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
  },
});

const dark = createTheme({
  colors: {
    bgYellow: "#FFD400",
    bgBlack: "#020202",
    bgWhite: "#FFFFFF",
    textYellow: "#FFD400",
    textBlack: "#020202",
    textWhite: "#FFFFFF",
  },
});
