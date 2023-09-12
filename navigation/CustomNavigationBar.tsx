import { useTheme, Appbar } from "react-native-paper";

import { useBreakpoint } from "../hooks/useBreakpoint";

export function CustomNavigationBar({ navigation }) {
  const { breakpoint } = useBreakpoint();
  const theme = useTheme();
  return (
    <Appbar.Header mode= 'center-aligned'>
      <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      <Appbar.Content title="CodeBlu3" />
      <Appbar.Action icon="bell" onPress={() => navigation.closeDrawer()} />
    </Appbar.Header>
  );
}
//<DarkModeSwitch />
      //<Appbar.BackAction  onPress={() => navigation.openDrawer()} />
  //const bpSizes= {sm: 'small', md:'medium', lg:'large'} 
   // <Appbar.Header mode= 'center-aligned'>
