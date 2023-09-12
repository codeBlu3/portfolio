import {
  MD3DarkTheme as PaperDarkTheme,
  MD3LightTheme as PaperLightTheme,
  adaptNavigationTheme,
  configureFonts,
} from "react-native-paper";
import { themeColorsLight, themeColorsDark } from "./themeColors";

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
} from "@react-navigation/native";

import merge from "deepmerge";

const bpVals = {
  breakpoints: {
    values: {
      sm: 0,
      md: 900,
      lg: 1200,
    },
  },
};

const fontConfig = {
  fontFamily: "sans-serif",
};

const fonts = { fonts: configureFonts({ config: fontConfig }) };

const PaperLightThemeScheme = {
  ...PaperLightTheme,
  ...themeColorsLight,
  ...bpVals,
  ...fonts,
};

const PaperDarkThemeScheme = {
  ...PaperDarkTheme,
  ...themeColorsDark,
  ...bpVals,
  ...fonts,
};

//bugs override rgb to rgba


// override theming in here
const { LightTheme: NavigationLightThemeAdapted } = adaptNavigationTheme({
  reactNavigationLight: NavigationLightTheme,
});

// override theming in here
const { DarkTheme: NagivationDarkThemeAdapted } = adaptNavigationTheme({
  reactNavigationDark: NavigationDarkTheme,
});

console.log(PaperLightThemeScheme.colors)
console.log(NavigationLightTheme.colors)

export const CombinedLightTheme = merge(
  NavigationLightThemeAdapted,
  PaperLightThemeScheme
);
console.log(CombinedLightTheme.colors)

export const CombinedDarkTheme = merge(
  NagivationDarkThemeAdapted,
  PaperDarkThemeScheme
);

declare global {
  namespace ReactNativePaper {
    type Breakpoint = "sm" | "md" | "lg";

    interface ThemeBreakpoints {
      values: { [k in Breakpoint]: number };
    }

    interface Theme {
      breakpoints: ThemeBreakpoints;
    }
  }
}

/*

import * as React from 'react';
import { configureFonts, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';

const fontConfig = {
  fontFamily: 'NotoSans'
  };

  const theme = {
    ...MD3LightTheme,
      fonts: configureFonts({config: fontConfig}),
      };

*/
