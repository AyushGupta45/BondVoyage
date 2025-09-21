import { LinearGradient } from "expo-linear-gradient";
import { AlertTriangle, Phone, Zap } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const PanicSOS = () => {
  return (
    <LinearGradient
      colors={["#ef4444", "#dc2626"]}
      style={{ borderRadius: 24, shadowOpacity: 0.5}}
    >
      <View className="p-6">
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center">
            <View className="bg-red-600 p-3 rounded-full mr-3">
              <AlertTriangle color="white" size={24} />
            </View>
            <View>
              <Text className="text-xl font-bold text-white">
                Emergency SOS
              </Text>
              <Text className="text-red-100 text-sm">
                Instant emergency alert
              </Text>
            </View>
          </View>
          <View className="bg-red-600 px-3 py-1 rounded-full">
            <Text className="text-white text-xs font-medium">24/7</Text>
          </View>
        </View>

        <LinearGradient
          colors={["rgba(255,255,255,0.2)", "rgba(255,255,255,0.3)"]}
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.3)",
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.8}
            className="w-full p-4 rounded-2xl"
          >
            <View className="flex flex-row items-center justify-center gap-3">
              <View className="bg-white p-2 rounded-full">
                <Phone color="#EF4444" size={20} />
              </View>
              <Text className="text-base font-bold text-white">
                EMERGENCY ALERT
              </Text>
              <Zap color="white" size={20} />
            </View>
          </TouchableOpacity>
        </LinearGradient>
        <Text className="text-red-100 text-xs mt-3 text-center">
          Instantly alerts authorities & emergency contacts with your location
        </Text>
      </View>
    </LinearGradient>
  );
};

export default PanicSOS;
