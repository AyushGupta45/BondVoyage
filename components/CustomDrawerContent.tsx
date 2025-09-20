import { Text } from "@/components/ui/text";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Globe, LogOut } from "lucide-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";

export default function CustomDrawerContent(props: any) {
  const navigation = useNavigation();

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const navigateToSettings = () => {
    navigation.navigate("settings" as never);
    closeDrawer();
  };

  const navigateToHome = () => {
    navigation.navigate("(tabs)" as never);
    closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props} className="flex-1 bg-white">
      <View className="flex-1 p-0 -mt-10">
        {/* User Card */}
        <LinearGradient
          colors={["#4f46e5", "#7c3aed", "#2563eb"]}
          style={{ padding: 24, borderRadius: 24 }}
        >
          <View className="flex-row items-center justify-between mb-6">
            <View className="flex-row items-center">
              <LinearGradient
                colors={["rgba(255,255,255,0.2)", "rgba(255,255,255,0.3)"]}
                style={{ padding: 12, borderRadius: 16, marginRight: 12 }}
              >
                <Globe color="white" size={24} />
              </LinearGradient>

              <View className="flex-col">
                <Text className="font-black text-white text-lg">
                  SAFE TOUR ID
                </Text>

                <LinearGradient
                  colors={["rgba(255,255,255,0.2)", "rgba(255,255,255,0.3)"]}
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    borderRadius: 9999,
                    borderWidth: 1,
                    borderColor: "rgba(255,255,255,0.3)",
                  }}
                  className="flex justify-center items-center"
                >
                  <Text className="text-white text-xs font-bold">
                    ✓ VERIFIED
                  </Text>
                </LinearGradient>
              </View>
            </View>
          </View>

          <LinearGradient
            colors={["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)"]}
            style={{
              borderRadius: 16,
              padding: 16,
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.2)",
            }}
          >
            <View className="flex-row flex-wrap gap-4">
              <View className="flex-1 min-w-[120px]">
                <Text className="text-sm text-white/70 mb-1">Tourist Name</Text>
                <Text className="font-bold text-white">John Doe</Text>
              </View>
              <View className="flex-1 min-w-[120px]">
                <Text className="text-sm text-white/70 mb-1">Nationality</Text>
                <Text className="font-bold text-white">United States</Text>
              </View>
              <View className="flex-1 min-w-[120px]">
                <Text className="text-sm text-white/70 mb-1">Valid Until</Text>
                <Text className="font-bold text-white">Dec 31, 2024</Text>
              </View>
              <View className="flex-1 min-w-[120px]">
                <Text className="text-sm text-white/70 mb-1">ID Number</Text>
                <Text className="font-bold text-white">ST-2024-001234</Text>
              </View>
            </View>
          </LinearGradient>
        </LinearGradient>

        {/* Bottom Actions */}
        <View className="mt-auto pt-6 border-t border-gray-200">
          <TouchableOpacity className="flex-row items-center py-3 px-4 rounded-lg">
            <LogOut size={20} color="#EF4444" />
            <Text className="ml-3 text-red-500 font-medium">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}
