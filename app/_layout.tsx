import CustomDrawerContent from "@/components/CustomDrawerContent";
import CustomSplashScreen from "@/components/SplashScreen";
import {
  PlayfairDisplay_700Bold,
  useFonts,
} from "@expo-google-fonts/playfair-display";
import { PortalHost } from "@rn-primitives/portal";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { View } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";

// Prevent the default splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loading, setLoading] = useState(true);
  const [loaded, error] = useFonts({
    PlayfairDisplay_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      // Simulate app loading time, then hide the default splash and show custom
      setTimeout(async () => {
        setLoading(false);
        // Hide the default Expo splash screen
        await SplashScreen.hideAsync();
      }, 2000);
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  if (loading) {
    return <CustomSplashScreen />;
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        {/* ✅ Replace Stack with Drawer */}
        <Drawer
          drawerContent={CustomDrawerContent}
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              width: 280,
            },
            overlayColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></Drawer>

        <PortalHost />
      </View>
    </SafeAreaView>
  );
}
