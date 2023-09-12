import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { LocaleProvider } from "./i8n/TranslationContext";
import { PaperWrapper, ThemeProvider } from "./theme/ThemeContext";
import { NavigationWrapper } from "./navigation/NavigationWrapper";

import {MainDrawNavigator} from './modules/MainDrawNavigator'

export default function App() {
  return (
    <SafeAreaProvider>
        <LocaleProvider>
          <ThemeProvider>
            <PaperWrapper>
              <NavigationWrapper>
	      <MainDrawNavigator/>

              </NavigationWrapper>
            </PaperWrapper>
          </ThemeProvider>
        </LocaleProvider>
    </SafeAreaProvider>
  );
}

///// ---------------------------------------------------------------

/*

    <SafeAreaView>
    </SafeAreaView>
// transfer this to authenticated user
                  <GraphqlProvider>
                  </GraphqlProvider>
	  <SocketProvider>
	  </SocketProvider>

                  <GraphqlProvider>
	  <SocketProvider>
	  </SocketProvider>
                  </GraphqlProvider>
*/
//add stack navigator
//<SampleComponent />
/// -------------------------------------------------------------------------------------
//import { StyleSheet, Text, View } from "react-native";

//import { useState, useMemo, useContext, createContext } from "react";
//import { useLocale } from "./i8n/TranslationContext";
//import { useAuth} from "./auth/AuthContext";
/*
type AppProps = {
  message: string;
  };

  // Easiest way to declare a Function Component; return type is inferred.
  const Comp  = ({ message }: AppProps): JSX.Element => <View>{message}</View>;

*/
