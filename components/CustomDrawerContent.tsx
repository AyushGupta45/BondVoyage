import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import DigitalCard from "./DigitalCard";
import MultiLanguage from "./MultiLanguage";

export default function CustomDrawerContent(props: any) {
  const navigation = useNavigation();

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const navigateToSettings = () => {
    navigation.navigate("settings" as never);
    closeDrawer();
  };

  return (
    <View className="flex-1 justify-between">
      {/* User Card */}
      <DigitalCard />

      {/* Bottom Actions */}
      <MultiLanguage />
    </View>
  );
}
