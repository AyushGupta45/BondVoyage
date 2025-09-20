// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      {/* <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      /> */}
    </Tabs>
  );
}
