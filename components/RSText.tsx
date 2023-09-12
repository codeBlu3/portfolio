import * as React from "react";
import { Text } from "react-native-paper";

import { useBreakpoint } from "../hooks/useBreakpoint";

export function RSDisplay(props) {
  const { breakpoint } = useBreakpoint();
  // should this one be part of state
  //  console.log(props)

  const variantMap = {
    sm: "displaySmall",
    md: "displayMedium",
    lg: "displayLarge",
  };

  return <Text variant={variantMap[breakpoint]} {...props} />;
}
export function RSHeadline(props) {
  const { breakpoint } = useBreakpoint();
  // should this one be part of state
  //  console.log(props)

  const variantMap = {
    sm: "headlineSmall",
    md: "headlineMedium",
    lg: "headlineLarge",
  };

  return <Text variant={variantMap[breakpoint]} {...props} />;
}



export function RSTitle(props) {
  const { breakpoint } = useBreakpoint();
  // should this one be part of state
  //  console.log(props)

  const variantMap = {
    sm: "titleSmall",
    md: "titleMedium",
    lg: "titleLarge",
  };

  return <Text variant={variantMap[breakpoint]} {...props} />;
}


export function RSBody(props) {
  const { breakpoint } = useBreakpoint();
  // should this one be part of state
  //  console.log(props)

  const variantMap = {
    sm: "bodySmall",
    md: "bodyMedium",
    lg: "bodyLarge",
  };

  return <Text variant={variantMap[breakpoint]} {...props} />;
}

export function RSLabel(props) {
  const { breakpoint } = useBreakpoint();
  // should this one be part of state
  //  console.log(props)

  const variantMap = {
    sm: "labelSmall",
    md: "labelMedium",
    lg: "labelLarge",
  };

  return <Text variant={variantMap[breakpoint]} {...props} />;
}


