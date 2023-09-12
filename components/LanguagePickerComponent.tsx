


import { useLocale } from "../i8n/TranslationContext";


import * as React from 'react';
import { View } from 'react-native';
import { IconButton, Menu, Divider } from 'react-native-paper';

export function LanguagePickerComponent() {
  const { currentLanguageCode, setCurrentLanguageCode } = useLocale();
  const [visible, setVisible] = React.useState(false);
  const languageSelection = [ 
  {label:'English', value:'en' },
  {label:'Spanish', value:'es' },
  {label:'French', value:'fr' },
  {label:"中文", value:'zh'},
  {label:"한국어", value:'ko'},
  {label:"日本語", value:'ja'},
 

  ]

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  function setLanguageClose(languageCode:string)  {
  setCurrentLanguageCode(languageCode)
  closeMenu()

  }

function renderMenuItem(item) {
return ( 
          <Menu.Item onPress={() => setLanguageClose(item.value)} title={item.label} />
) 
} 
  return (
       <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<IconButton icon='translate' style = {{alignItems: 'flex-start'}} onPress={openMenu}>Select Language </IconButton>}>
	  {languageSelection.map(renderMenuItem	)}
       </Menu>
  );
};
