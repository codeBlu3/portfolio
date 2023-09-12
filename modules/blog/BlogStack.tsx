import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function BlogStack() {
  const BlogStackNav = createNativeStackNavigator();
  return (
    <BlogStackNav.Navigator
      initialRouteName="Inbox"
      screenOptions={{ headerShown: false }}
    >
      <BlogStackNav.Screen name="BlogList" component={InboxScreen} />
      <BlogStackNav.Screen
        name="BlogEntry"
        component={NewMessageScreen}
      />

   </BlogStackNav.Navigator>
  );
}

/*
      <MessagingStackNav.Screen
        name="CmHeaderSelection"
        component={CmHeaderSelectionScreen}
      />
      screenOptions={{ headerShown: false }}
 
*/
