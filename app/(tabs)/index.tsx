import DrawerLayout from "@/components/DrawerLayout";
import TouristPortal from "@/components/TouristPortal";
import { View } from "react-native";

export default function Index() {
  return (
    <DrawerLayout>
      <View className="flex-1 items-center justify-center bg-background">
        <TouristPortal />
      </View>
    </DrawerLayout>
  );
}
