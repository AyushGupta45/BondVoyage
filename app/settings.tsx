import DrawerLayout from "@/components/DrawerLayout";
import React from "react";
import { Text, View } from "react-native";

export default function Settings() {
  return (
    <DrawerLayout>
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-xl font-bold text-gray-800">Settings Screen</Text>
        <Text className="text-gray-600 mt-2">
          This is the settings page accessible from the drawer.
        </Text>
      </View>
    </DrawerLayout>
  );
}
