import React from "react"
import { Platform } from "react-native"
import TabsAndroid from "./android"
import TabsIos from "./ios"

export const Tabs = () => {
  return Platform.OS === 'ios'
          ? <TabsIos />
          : <TabsAndroid />
}