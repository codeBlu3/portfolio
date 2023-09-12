import {IconButton,} from "react-native-paper";
import { useThemeContext } from "../theme/ThemeContext";

export function ToggleThemeComponent() {
  const { toggleTheme, isThemeDark } = useThemeContext();
  return <IconButton icon={isThemeDark ? 'moon-waning-crescent':'white-balance-sunny'}  onPress={()=>toggleTheme()} />
  
};


