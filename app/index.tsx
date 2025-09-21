import DrawerLayout from "@/components/DrawerLayout";
import TouristDashboard from "@/screens/TouristDashboard";
import TouristRegistration from "@/screens/TouristRegistration";
import { View } from "react-native";

export default function Index() {
  return (
    <DrawerLayout>
      <View className="flex-1 items-center justify-center bg-background">
        {/* <TouristRegistration /> */}
        <TouristDashboard />
      </View>
    </DrawerLayout>
  );
}
