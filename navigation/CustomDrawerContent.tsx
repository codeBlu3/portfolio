import { Drawer } from "react-native-paper";
import { useLocale } from "../i8n/TranslationContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeContext } from "../theme/ThemeContext";

import {ToggleThemeComponent} from "../components/ToggleThemeComponent"
import {LanguagePickerComponent} from "../components/LanguagePickerComponent"
//make mobile friendly, use linkto on navigation

export function CustomDrawerContent(props: any) {
  const { toggleTheme } = useThemeContext();
  const { useTranslate } = useLocale();
  //replicate below
  //<DrawerItemList {...props} />

  return (
    <SafeAreaView>
      <Drawer.Section>
        <CustomDrawerItemList {...props} />
       <Drawer.Item
          label="Toggle Theme"
	  onPress = {()=>toggleTheme()}
	  right = {ToggleThemeComponent}
        />

        </Drawer.Section>
    </SafeAreaView>
  );
}

const CustomDrawerItemList = ({ state, navigation, descriptors }: any) => {
  const { useTranslate } = useLocale();
  return state.routes.map((route: any, key: any) => {
    return (
      <Drawer.Item
        key={route.key}
        label={useTranslate(route.name)}
        onPress={() => navigation.navigate(route.name)}
      />
    );
  });
};
