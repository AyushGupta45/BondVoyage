import { LinearGradient } from "expo-linear-gradient";
import { CheckCircle, MapPin } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const CurrentLocation = () => {
  return (
    <Card className="bg-white/90 rounded-3xl border-0 shadow-xl flex-1">
      <CardHeader className="pb-2">
        <CardTitle>
          <View className="flex-row items-center gap-3">
            <LinearGradient
              colors={["#3b82f6", "#1e40af"]}
              style={{ padding: 12, borderRadius: 16 }}
            >
              <MapPin color="white" size={20} />
            </LinearGradient>
            <View>
              <Text className="text-lg font-bold text-slate-800">
                Current Location
              </Text>
              <Text className="text-slate-500 text-xs">GPS tracking</Text>
            </View>
          </View>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <View className="items-center py-4">
          <Text className="text-xl font-bold text-slate-800 mb-1">
            Downtown Tourist Area
          </Text>
          <Text className="text-sm text-slate-500 mb-4">
            Verified safe zone
          </Text>
          <LinearGradient
            colors={["#10b981", "#059669"]}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 9999,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CheckCircle color="white" size={14} />
            <Text className="text-white ml-2 text-xs font-bold">Safe Area</Text>
          </LinearGradient>
        </View>
      </CardContent>
    </Card>
  );
};

export default CurrentLocation;
